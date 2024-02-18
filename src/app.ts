import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import createError from 'http-errors';
import apiRouter from './routes/api';

dotenv.config();

const app: Express = express();
const hostname = process.env.HOST ?? 'localhost';
const port = Number.parseInt(process.env.PORT ?? '3000', 10);

app.use('/api', apiRouter);

app.get('/', (_req: Request, res: Response) => {
  res.send('express-typescript-template');
});

app.use((_req: Request, res: Response) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(port, hostname, () => {
  console.log(`⚡️[server]: Server is running at http://${hostname}:${port}`);
});
