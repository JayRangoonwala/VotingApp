import CandidateClass from "../../Services/candidateServices.js";
const queries = {
    candidates: async () => {
        return await CandidateClass.allCandidate();
    },
    voteCount: async () => {
        // return await
        const res = await CandidateClass.voteCount();
        return res;
    }
};
const mutations = {
    createCandidate: async (_, arg) => {
        return await CandidateClass.createCandidate(arg);
    }
};
export const resolvers = {
    queries, mutations
};
//# sourceMappingURL=resolvers.js.map