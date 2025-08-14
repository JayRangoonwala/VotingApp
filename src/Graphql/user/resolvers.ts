import { prisma } from "../../lib/db.js";
import UserService from "../../Services/userServices.js";

const queries = {
    users:() => prisma.user.findMany(),
}

const mutations = {
    createUser:async(_:any , args:any) => {
       const res = await UserService.createUser(args);
       return `Sign Up Successfully !\n Name:${res.name}`;
    },
    voteGiving: async(_:any,arg:{party:string}) => {
        await UserService.givingVotes(arg);
        return "Vote given Successfully!";
    }
}

export const resolvers = {
    queries, mutations
}