import { Request, RequestHandler, Response } from 'express';

export const healthCheck: RequestHandler = (req: Request, res: Response): Response => {
  console.log('New Healthcheck Request:')
  console.log(req)
  return res.status(200);
};