import { Request, RequestHandler, Response } from 'express';

export const healthCheck: RequestHandler = (req: Request, res: Response): Response => {
  return res.status(200).send('Health Check Performed');
};