import createAuthApp from "./app/auth";
import { Env } from "./types";
import createMongoClient from "./mongoClient";
import createModels from "./createModels";

const createConfig = async (env: Env) => {
  const db = await createMongoClient(env);
  const repositories = createModels(db!);
  const authApp = createAuthApp({ env, db: repositories });
  return {
    authApp,
    db,
    repositories,
  };
};

export default createConfig;
