import express from 'express';
import dotenv from 'dotenv';


dotenv.config();
const server = express();

server.get('/', (req, res) => {
    res.send('Hello World!');
})

server.listen(process.env.PORT || 1000, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
})