import { ApolloServer } from "@apollo/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const typeDefs = `
    type User{
        id:ID!
        name:String!
        email:String!
    }
    type Query{
        users:[User]
    }
    type Mutation{
        createUser(name:String!,email:String!,password:String!):User!
    }
`

const resolvers = {
    Query:{
        users:() => prisma.user.findMany(),
    },
    Mutation:{
        createUser:(_:any , args:any) => prisma.user.create({data:args})
    }
}

export const server = new ApolloServer({
    typeDefs:typeDefs,
    resolvers:resolvers
})

