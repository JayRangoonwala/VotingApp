import { time } from 'console';
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
                name: name,
                email: email ?? null,
                password,
                aadharCard: aadharcard,
                age,
                mobile
            }
        });
    }
    public static async givingVotes(payload: { party: string }) {
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
        })
    }
}