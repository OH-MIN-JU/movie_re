require('dotenv').config();
const express = require('express');
const cors = require('cors');
const movieRouter = require('./routes/movies')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/movies', movieRouter);

app.get('/', (request, response) => {
    response.send('Movie API 서버가 실행 중입니다.');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});