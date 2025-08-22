import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

type tokenPayload = {
    userId: string,
    age: string
}
export default class JWT{
    public static async generateToken (payload: tokenPayload) {
        if (!process.env.SECRET_KEY) {
            throw new Error("SECRET_KEY is not defined in environment variables");
        }
        const token = jwt.sign(payload, process.env.SECRET_KEY , {expiresIn:"1h"})
        return token;
    }
    public static async decodeToken(token:string){
        if(!process.env.SECRET_KEY) throw new Error("SECRET_KEY is not defined in environment variables")
        return jwt.verify(token,process.env.SECRET_KEY);
    }
}