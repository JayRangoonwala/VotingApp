import CandidateClass from "../../Services/candidateServices.js";

export interface createCandi{
    name:string,
    party:string,
    age:string,
}

const queries = {
    candidates: async() => {
        return await CandidateClass.allCandidate();
    },
    voteCount: async() => {
        // return await
        const res = await CandidateClass.voteCount();
        return res;
    }
}

const mutations = {
    createCandidate:async(_:any,arg:createCandi) => {
        return await CandidateClass.createCandidate(arg);
        
    }
}

export const resolvers = {
    queries, mutations
}