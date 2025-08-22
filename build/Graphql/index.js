import { ApolloServer } from "@apollo/server";
import { prisma } from '../lib/db.js';
import { User } from "./user/index.js";
import { Candidate } from "./candidate/index.js";
import JWT from "../Services/auth.js";
const typeDefs = `
    ${User.typeDefs}
    ${Candidate.typeDefs}
    type Query{
        ${Candidate.query}
        ${User.query}
        getToken(userId:String!,age:String!):String
    }
    type Mutation{
        ${Candidate.mutations}
        ${User.mutations}
    }
`;
const resolvers = {
    Query: {
        ...Candidate.resolvers.queries,
        ...User.resolvers.queries,
        getToken: async (_, arg) => {
            return await JWT.generateToken(arg);
        }
    },
    Mutation: {
        ...Candidate.resolvers.mutations,
        ...User.resolvers.mutations
    }
};
export const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});
//# sourceMappingURL=index.js.map