export interface createCandi {
    name: string;
    party: string;
    age: string;
}
export declare const resolvers: {
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
        createCandidate: (_: any, arg: createCandi) => Promise<"You are Not eligible for Candidates of Election" | "Party Name Already Exists" | "Candidate Created!">;
    };
};
//# sourceMappingURL=resolvers.d.ts.map