import { prisma } from '../lib/db.js'
import JWT from './auth.js'

interface createUser {
    name: string,
    email?: string | null,
    password: string,
    aadharcard: string,
    age: string,
    mobile: string
}
type userLogin = {
    aadharcard: string,
    password: string
}

export default class UserService {
    public static async createUser(payload: createUser) {
        const { name, email, password, aadharcard, age, mobile } = payload;
        return await prisma.user.create({
            data: {
                name: name,
                email: email ?? null,
                password,
                aadharCard: aadharcard,
                age,
                mobile
            }
        });
    }
    public static async givingVotes(payload: { party: string }, context: any) {

        if (!context.user) {
            return "Please Login!"
        }
        if (context.user.age < 18) {
            return "You are not eligible"
        }
        const user1 = await prisma.user.findUnique({
            where: {
                id: Number(context.user.userId)
            },
            select: {
                isVoted: true
            }
        })
        if (user1?.isVoted) return "You Have Already Given Vote"
        const candidate = await prisma.candidates.findUnique({
            where: {
                party: payload.party
            },
            select: {
                vote: true
            }
        })
        const oldVotes = Array.isArray(candidate?.vote)
            ? candidate.vote
            : [];
        const existingVote = [
            ...oldVotes, {
                userId: "user",
                time: Date.now()
            }
        ]
        const res = await prisma.candidates.update({
            where: {
                party: payload.party,
            },
            data: {
                vote: existingVote
            }
        });
        const user = await prisma.user.update({
            where: {
                id: Number(context.user.userId)
            },
            data: {
                isVoted: true
            }
        })
        return "Vote Given Successfully";
    }
    public static async userLogin(data: userLogin) {
        const { aadharcard, password } = data;

        const user = await prisma.user.findUnique({
            where: {
                aadharCard: aadharcard
            }
        });
        if (!user) throw new Error("Aadhar card not registerd");

        const token = await JWT.generateToken({ userId: user.id.toString(), age: user.age })
        return token;
    }
}