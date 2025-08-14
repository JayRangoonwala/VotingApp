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
    };
    mutations: {
        createCandidate: (_: any, arg: createCandi) => Promise<{
            name: string;
            party: string;
            age: string;
            vote: import("@prisma/client/runtime/library").JsonValue;
        }>;
    };
};
//# sourceMappingURL=resolvers.d.ts.map