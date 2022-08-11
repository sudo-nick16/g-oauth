import axios from "axios";
import { Env, GoogleTokensResult } from "src/types";

export const getGoogleOauthTokens = async ({
  code,
  env,
}: {
  code: string;
  env: Env;
}): Promise<GoogleTokensResult | void> => {
  const url = "https://oauth2.googleapis.com/token";
  const values = {
    code,
    client_id: env.gClientId,
    client_secret: env.gClientSecret,
    redirect_uri: env.gOauthRedirectURI,
    grant_type: "authorization_code",
  };
  
  const qs = new URLSearchParams(values).toString();
  console.log(values, qs);
  try {
    const res = await axios.post(url, qs, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return res.data;
  } catch (err) {
    console.log(`[ERROR] Failed to get google oauth tokens.`, err);
  }
};
