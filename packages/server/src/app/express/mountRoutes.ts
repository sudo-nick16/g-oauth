import { Express } from "express";

export default (app: Express, config: any) => {
    app.use("/api/auth/", config.authApp.router);
};
