export declare const Candidate: {
    mutations: string;
    query: string;
    resolvers: {
        queries: {
            candidates: () => Promise<{
                name: string;
                party: string;
                age: string;
                vote: import("@prisma/client/runtime/library").JsonValue;
            }[]>;
        };
        mutations: {
            createCandidate: (_: any, arg: import("./resolvers.js").createCandi) => Promise<{
                name: string;
                party: string;
                age: string;
                vote: import("@prisma/client/runtime/library").JsonValue;
            }>;
        };
    };
    typeDefs: string;
};
//# sourceMappingURL=index.d.ts.map