export declare const User: {
    mutations: string;
    query: string;
    resolvers: {
        queries: {
            users: () => import("@prisma/client").Prisma.PrismaPromise<{
                name: string;
                email: string | null;
                password: string;
                mobile: string;
                age: string;
                aadharCard: string;
                role: import("@prisma/client").$Enums.Vote;
                isVoted: boolean;
                id: number;
            }[]>;
            login: (_: any, arg: {
                aadharcard: string;
                password: string;
            }) => Promise<string>;
        };
        mutations: {
            createUser: (_: any, args: any) => Promise<string>;
            voteGiving: (_: any, arg: {
                party: string;
            }, context: any) => Promise<"Please Login!" | "You are not eligible" | "You Have Already Given Vote" | "Vote Given Successfully">;
        };
    };
    typeDefs: string;
};
//# sourceMappingURL=index.d.ts.map