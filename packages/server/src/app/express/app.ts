import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import mountRoutes from "./mountRoutes";
import cookieParser from "cookie-parser";

const createExpressApp = (config: any) => {
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors());
  mountRoutes(app, config);
  app.use((err: any, _: Request, res: Response, __: NextFunction) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });
  return app;
};

export default createExpressApp;
