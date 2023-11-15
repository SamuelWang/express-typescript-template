import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.send('API Endpoint');
});

export default router;
