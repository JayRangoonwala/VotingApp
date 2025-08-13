import { ApolloServer } from "@apollo/server";
import { prisma } from '../lib/db.js';
import { User } from "./user/index.js";

const typeDefs = `
    ${User.typeDefs}
    type Query{
        
        ${User.query}
    }
    type Mutation{
        
        ${User.mutations}
    }
`

const resolvers = {
    Query: {
        ...User.resolvers.queries
    },
    Mutation: {
        ...User.resolvers.mutations
    }
}

export const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})

