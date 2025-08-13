import { prisma } from '../lib/db.js'

interface createUser {
    name: string,
    email?: string | null,
    password: string,
    aadharcard: string,
    age: string,
    mobile: string
}

export default class UserService {
    public static async createUser(payload: createUser) {
        const { name, email, password, aadharcard, age, mobile } = payload;
        return await prisma.user.create({
            data: {
                name:name,
                email:email ?? null,
                password,
                aadharCard:aadharcard,
                age,
                mobile
            }
        });
    }
}