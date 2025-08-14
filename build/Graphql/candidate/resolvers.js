import CandidateClass from "../../Services/candidateServices.js";
const queries = {
    candidates: async () => {
        return await CandidateClass.allCandidate();
    }
};
const mutations = {
    createCandidate: async (_, arg) => {
        const res = await CandidateClass.createCandidate(arg);
        return res;
    }
};
export const resolvers = {
    queries, mutations
};
//# sourceMappingURL=resolvers.js.map