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
            voteCount: () => Promise<{
                party: String;
                vote: String;
            }[]>;
        };
        mutations: {
            createCandidate: (_: any, arg: import("./resolvers.js").createCandi) => Promise<"You are Not eligible for Candidates of Election" | "Party Name Already Exists" | "Candidate Created!">;
        };
    };
    typeDefs: string;
};
//# sourceMappingURL=index.d.ts.map