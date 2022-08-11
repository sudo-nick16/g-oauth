import { NextFunction, Request, Response } from "express";

type func = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<Response<any, Record<string, any>>> | Promise<void>;

export default (fn: func) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};
