import { prisma } from '../lib/db.js';
import {} from '../Graphql/candidate/resolvers.js';
export default class CandidateClass {
    static async createCandidate(payload) {
        const { name, party, age } = payload;
        return await prisma.candidates.create({
            data: {
                name,
                party,
                age,
                vote: []
            }
        });
    }
    static async allCandidate() {
        return await prisma.candidates.findMany();
    }
}
//# sourceMappingURL=candidateServices.js.map