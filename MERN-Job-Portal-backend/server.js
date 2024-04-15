import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const server = express();

mongoose.connect(process.env.MONGODB_URI, {
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

server.get('/', (req, res) => {
    res.send('Hello World!');
}),

server.listen(process.env.PORT || 1000, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});