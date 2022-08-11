import mongoose from "mongoose";
import user from "./schemas/user";

const createModels = (db: typeof mongoose) => {
  const User = db.model("User", user);

  return {
    User,
  };
};

export default createModels;
