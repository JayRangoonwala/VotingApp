export declare const resolvers: {
    queries: {
        users: () => import("@prisma/client").Prisma.PrismaPromise<{
            id: number;
            name: string;
            email: string | null;
            password: string;
            mobile: string;
            age: string;
            aadharCard: string;
            role: import("@prisma/client").$Enums.Vote;
            isVoted: boolean;
        }[]>;
    };
    mutations: {
        createUser: (_: any, args: any) => Promise<string>;
    };
};
//# sourceMappingURL=resolvers.d.ts.map