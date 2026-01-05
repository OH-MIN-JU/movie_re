const express = require('express');
const router = express.Router();
const { searchMovies } = require('../utils/fetchMovie');
const { getSchedule } = require('../utils/fetchSchedule');
const { getMovieDetail } = require('../utils/fetchMovieDetail')

// 영화 검색
router.get('/search', async (request, response) => {
    const query = request.query.query;
    if (!query) return response.status(400).json({ message: '검색어를 입력해 주세요.'});

    try {
        const data = await searchMovies(query);
        response.json(data);
    } catch (error) {
        response.status(500).json({ message: '영화 검색 중 오류 발생'});
    }
});

// 영화 상세정보 조회
router.get('./detail/:movieCd', async (request, response) => {
    const movieCd = request.params.movieCard;

    try {
        const detail = await getMovieDetail(movieCd);
        response.json(detail);
    } catch (error) {
        response.status(500).json({ message: '영화 상세정보 조회 중 오류 발생' });
    }
})

// 상영일정 조회
router.get('/schedule', async (request, response) => {
    let { startDate, endDate } = request.query;

    // 기본 날짜 지정
    const today = new Date();
    const formatDate = (date) =>
        date.toISOString().slice(0, 10).replace(/-/g, ''); //YYYYMMDD

    if (!startDate) startDate = formatDate(today);
    if (!endDate) {
        const nextWeek = new Date(today);
        nextWeek.setDate(today.getDate() + 7);
        endDate = formatDate(nextWeek);
    }

    console.log('schedue 라우터 호출됨, startDate:', startDate, 'endDate:', endDate) ;

    try {
        const schedule = await getSchedule(startDate, endDate);

        // 데이터가 없으면 메시지 반환
        if (!schedule || Object.keys(schedule).length === 0) {
            return response.status(200).json({ message: '조회 기간에 상영일정이 없습니다.' });
        }
        
        response.json(schedule);
    } catch (error) {
        console.error('schedule 라우터 내부 에러:', error);
        response.status(500).json({ message: '상영일정 조회 중 오류 발생'});
    }
});

module.exports = router;