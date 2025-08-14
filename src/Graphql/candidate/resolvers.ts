import CandidateClass from "../../Services/candidateServices.js";

export interface createCandi{
    name:string,
    party:string,
    age:string,
}

const queries = {
    candidates: async() => {
        return await CandidateClass.allCandidate();
    }
}

const mutations = {
    createCandidate:async(_:any,arg:createCandi) => {
        const res = await CandidateClass.createCandidate(arg);
        return res;
    }
}

export const resolvers = {
    queries, mutations
}