import dotenv from "dotenv";

const envResult = dotenv.config();

if (envResult.error) {
  console.error(`"[ERROR] env failed to load:")} ${envResult.error}`);
  process.exit(1);
}

const requireFromEnv = (key: string): string => {
  if (!process.env[key]) {
    console.error(`"[APP ERROR] Missing env variable:")} ${key}`);
    return process.exit(1);
  }
  return process.env[key]!;
};

export default {
  env: requireFromEnv("NODE_ENV"),
  port: parseInt(requireFromEnv("PORT"), 10),
  gClientId: requireFromEnv("GOOGLE_CLIENT_ID"),
  gClientSecret: requireFromEnv("GOOGLE_CLIENT_SECRET"),
  origin: requireFromEnv("ORIGIN"),
  cookieName: requireFromEnv("COOKIE_NAME"),
  serverRootURI: requireFromEnv("SERVER_ROOT_URI"),
  appName: requireFromEnv("APP_NAME"),
  gOauthRedirectURI: requireFromEnv("GOOGLE_OAUTH_REDIRECT_URI"),
  dbUrl: requireFromEnv("DB_URL"),
  accessTokenSecret: requireFromEnv("ACCESS_TOKEN_SECRET"),
  refreshTokenSecret: requireFromEnv("REFRESH_TOKEN_SECRET"),
};
