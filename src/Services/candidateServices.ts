import { prisma } from '../lib/db.js';
import { type createCandi } from '../Graphql/candidate/resolvers.js';

type votes = {
    party: String,
    vote: String
}

export default class CandidateClass {
    public static async createCandidate(payload: createCandi) {
        const { name, party, age } = payload;
        if (Number(age) < 21) return "You are Not eligible for Candidates of Election";
        const candidate = await prisma.candidates.findUnique({
            where: {
                party: party
            }, select: {
                party: true
            }
        })
        if(candidate?.party) return "Party Name Already Exists";
        await prisma.candidates.create({
            data: {
                name,
                party,
                age,
                vote: []
            }
        })
        return "Candidate Created!";
    }
    public static async allCandidate() {
        return await prisma.candidates.findMany();
    }
    public static async voteCount() {
        const res = await prisma.candidates.findMany();
        const object: votes[] = [];
        res.map((obj) => {
            object.push({
                "party": obj.party,
                vote: Array.isArray(obj.vote) ? obj.vote.length.toString() : "0",
            })
        })
        return object;
    }
}