import mongoose from 'mongoose';
import { Env } from "./types";

const createMongoClient = async (env: Env) => {
    try{
        const db = await mongoose.connect(env.dbUrl, {});
        return db;
    }catch(err){
        console.log(err.message);
        return undefined;
    }
}

export default createMongoClient;