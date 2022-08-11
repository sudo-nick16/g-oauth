import { Response } from "express";
import { Env } from "src/types";

const setCookies = (token: string,res: Response, env: Env) => {
    return res.cookie(env.cookieName, token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
    });
}

export default setCookies;