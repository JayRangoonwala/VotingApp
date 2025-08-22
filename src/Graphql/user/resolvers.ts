import { prisma } from "../../lib/db.js";
import UserService from "../../Services/userServices.js";

type userLogin = {
    aadharcard: string,
    password: string
}

const queries = {
    users: () => prisma.user.findMany(),
    login: async (_: any, arg: userLogin) => {
        return await UserService.userLogin(arg)
    },
}

const mutations = {
    createUser: async (_: any, args: any) => {
        const res = await UserService.createUser(args);
        return `Sign Up Successfully !\n Name:${res.name}`;
    },
    voteGiving: async (_: any, arg: { party: string },context:any) => {
       return await UserService.givingVotes(arg,context);
    }
}

export const resolvers = {
    queries, mutations
}