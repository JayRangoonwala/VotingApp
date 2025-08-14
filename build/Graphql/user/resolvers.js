import { prisma } from "../../lib/db.js";
import UserService from "../../Services/userServices.js";
const queries = {
    users: () => prisma.user.findMany(),
};
const mutations = {
    createUser: async (_, args) => {
        const res = await UserService.createUser(args);
        return `Sign Up Successfully !\n Name:${res.name}`;
    },
    voteGiving: async (_, arg) => {
        await UserService.givingVotes(arg);
        return "Vote given Successfully!";
    }
};
export const resolvers = {
    queries, mutations
};
//# sourceMappingURL=resolvers.js.map