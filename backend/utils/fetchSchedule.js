const axios = require('axios');

const API_KEY = process.env.CINEMATHEQUE_API_KEY;
const BASE_URL = 'https://www.kmdb.or.kr/info/api/3/api.json'

async function getSchedule(startDate, endDate) {
    console.log('getSchedule 호출됨, startDate:', startDate, 'endDate:', endDate);
    console.log('사용할 CINEMATHEQUE API KEY:', API_KEY);

    try{
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                startDate: startDate,
                endDate: endDate
            }
        });
        console.log('상영일정 API 호출 성공, data:', response.data);

        // resultMessage check
        if (response.data.resultMessage !== 'INFO-100' || !response.data.Date || response.data.Data.length === 0){
            return { message: '조회 기간에 상영일정이 없습니다.' };
        }
        
        return response.data;
    } catch (error) {
        console.error('상영일정 API 호출 오류:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = {getSchedule};