import { prisma } from "../../lib/db.js";
import UserService from "../../Services/userServices.js";
const queries = {
    users: () => prisma.user.findMany(),
    login: async (_, arg) => {
        return await UserService.userLogin(arg);
    },
};
const mutations = {
    createUser: async (_, args) => {
        const res = await UserService.createUser(args);
        return `Sign Up Successfully !\n Name:${res.name}`;
    },
    voteGiving: async (_, arg, context) => {
        return await UserService.givingVotes(arg, context);
    }
};
export const resolvers = {
    queries, mutations
};
//# sourceMappingURL=resolvers.js.map