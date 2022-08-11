import { Env } from "src/types";
import jwt from "jsonwebtoken";

export const createAccessToken = (
  user: {
    _id: string;
    email: string;
  },
  env: Env
) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    env.accessTokenSecret,
    {
      algorithm: "HS256",
      expiresIn: "15m",
    }
  );
};

export const createRefreshToken = (
  user: {
    _id: string;
    email: string;
  },
  env: Env
) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    env.refreshTokenSecret,
    {
      algorithm: "HS256",
      expiresIn: "7d",
    }
  );
};
