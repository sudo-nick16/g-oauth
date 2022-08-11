import { Request, Response } from "express";
import { Db, Env, GoogleTokensResult } from "src/types";
import wrapAsync from "../../errorHandlers/wrapAsync";
import { getGoogleOauthTokens } from "./user.service";
import jwt from "jsonwebtoken";
import setCookies from "../utils/setCookies";
import {
  createAccessToken,
  createRefreshToken,
} from "../utils/createAuthToken";

const createAuthHandler = ({ env, db }: { env: Env; db: Db }) => {
  const googleOauthHandler = wrapAsync(async (req: Request, res: Response) => {
    
    const code = req.query.code as string;

    const { id_token, access_token: _ } = (await getGoogleOauthTokens({
      code,
      env,
    })) as GoogleTokensResult;

    const { email, name, picture, email_verified } = jwt.decode(id_token) as {
      email: string;
      name: string;
      picture: string;
      email_verified: boolean;
    };

    // console.log({ email, name, picture, access_token });
    if (!email_verified) {
      return res.status(400).json({ error: "Email not verified." });
    }

    try {
      const user = await db.User.findOneAndUpdate(
        { email },
        {
          email,
          name,
          picture,
        },
        {
          upsert: true,
          new: true,
        }
      );
      setCookies(createRefreshToken(user.toJSON(), env), res, env);
      return res
        .status(200)
        .json({ accessToken: createAccessToken(user.toJSON(), env) });
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({ error: err.message });
    }
  });
  return {
    googleOauthHandler,
  };
};

export default createAuthHandler;
