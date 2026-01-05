const axios = require('axios');

const API_KEY = process.env.KOFIC_API_KEY;
const BASE_URL = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json'

async function searchMovies(query) {
    console.log('searchMovies 호출됨, query:', query)
    console.log('사용할 API KEY:', API_KEY);
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                movieNm: query,
                itemPerPage: 10,
                curPage: 1
            }
        });
        console.log('API 호출 성공, data:', response.data)
        return response.data;
    } catch (error) {
        console.error('API 호출 오류:', error.message);
        throw error;
    }
}