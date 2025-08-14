import { time } from 'console';
import { prisma } from '../lib/db.js';
export default class UserService {
    static async createUser(payload) {
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
    static async givingVotes(payload) {
        const candidate = await prisma.candidates.findUnique({
            where: {
                party: payload.party
            },
            select: {
                vote: true
            }
        });
        const oldVotes = Array.isArray(candidate?.vote)
            ? candidate.vote
            : [];
        const existingVote = [
            ...oldVotes, {
                userId: "user",
                time: Date.now()
            }
        ];
        const res = await prisma.candidates.update({
            where: {
                party: payload.party,
            },
            data: {
                vote: existingVote
            }
        });
    }
}
//# sourceMappingURL=userServices.js.map