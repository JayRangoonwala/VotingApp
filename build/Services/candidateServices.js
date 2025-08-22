import { prisma } from '../lib/db.js';
import {} from '../Graphql/candidate/resolvers.js';
export default class CandidateClass {
    static async createCandidate(payload) {
        const { name, party, age } = payload;
        if (Number(age) < 21)
            return "You are Not eligible for Candidates of Election";
        const candidate = await prisma.candidates.findUnique({
            where: {
                party: party
            }, select: {
                party: true
            }
        });
        if (candidate?.party)
            return "Party Name Already Exists";
        await prisma.candidates.create({
            data: {
                name,
                party,
                age,
                vote: []
            }
        });
        return "Candidate Created!";
    }
    static async allCandidate() {
        return await prisma.candidates.findMany();
    }
    static async voteCount() {
        const res = await prisma.candidates.findMany();
        const object = [];
        res.map((obj) => {
            object.push({
                "party": obj.party,
                vote: Array.isArray(obj.vote) ? obj.vote.length.toString() : "0",
            });
        });
        return object;
    }
}
//# sourceMappingURL=candidateServices.js.map