import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// For testing
app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello from the server',
    });
});

app.get('/test', async (req, res) => {
    console.log('test end-point from the server!')
    res.status(200).json({
        message: 'test end-point from the server!',
    });
});


const startServer = async () => {
    try {
        app.listen(PORT, '0.0.0.0', () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

startServer();