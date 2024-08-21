import express, { Request, Response } from 'express';
import config from './config/config';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Sigma');
});

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
});