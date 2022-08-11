import createModels from "./createModels";

export declare type Env = typeof import("./env").default;
export declare type Env = typeof import("./config").default;

export interface GoogleTokensResult {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export type Db = ReturnType<typeof createModels>