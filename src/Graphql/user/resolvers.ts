import { prisma } from "../../lib/db.js"
import UserService from "../../Services/userServices.js"

const queries = {
    users:() => prisma.user.findMany(),
}

const mutations = {
    createUser:async(_:any , args:any) => {
       const res = await UserService.createUser(args);
       return `Sign Up Successfully !\n Name:${res.name}`;
    },
}

export const resolvers = {
    queries, mutations
}