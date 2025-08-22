import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export default class JWT {
    static async generateToken(payload) {
        if (!process.env.SECRET_KEY) {
            throw new Error("SECRET_KEY is not defined in environment variables");
        }
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" });
        return token;
    }
    static async decodeToken(token) {
        if (!process.env.SECRET_KEY)
            throw new Error("SECRET_KEY is not defined in environment variables");
        return jwt.verify(token, process.env.SECRET_KEY);
    }
}
//# sourceMappingURL=auth.js.map