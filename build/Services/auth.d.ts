import jwt from 'jsonwebtoken';
type tokenPayload = {
    userId: string;
    age: string;
};
export default class JWT {
    static generateToken(payload: tokenPayload): Promise<string>;
    static decodeToken(token: string): Promise<string | jwt.JwtPayload>;
}
export {};
//# sourceMappingURL=auth.d.ts.map