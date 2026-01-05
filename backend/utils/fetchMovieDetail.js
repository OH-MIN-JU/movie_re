const axios = require('axios');

const API_KEY = process.env.KOFIC_API_KEY;
const BASE_URL = ''

async function getMovieDetail(movieCard) {
    console.log('getMovieDetail 호출됨, movieCard:', movieCard);
    console.log('사용할 KOFIC API KEY:', API_KEY);

    if (!movieCard) {
        throw new Error('movieCard가 필요합니다.');
    }

    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                movieCard
            }
        });

        console.log('영화 상세정보 API 호출 성공, data:', response.data);

        // 영화 정보가 없는 경우
        if (!response.data || !response.data.movieInforResult || !response.data.movieInforResult.movieInfo) {
            return { message: '영화 정볼르 찾을 수 없습니다.' };
        }

        return response.data.movieInforResult.movieInfo;
    } catch (error) {
        console.error('영화 상세정보 API 호출 오류:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = { getMovieDetail };