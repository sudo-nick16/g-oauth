import express from "express";
import { Db, Env } from "src/types";
import createAuthHandler from "./handlers";

const build = ({ env, db }: { env: Env; db: Db }) => {
  const handlers = createAuthHandler({ env, db });
  const router = express.Router();
  router.route("/oauth/google/").get(handlers.googleOauthHandler);
  return { router };
};

export default build;
