import { type createCandi } from '../Graphql/candidate/resolvers.js';
export default class CandidateClass {
    static createCandidate(payload: createCandi): Promise<{
        name: string;
        party: string;
        age: string;
        vote: import("@prisma/client/runtime/library").JsonValue;
    }>;
    static allCandidate(): Promise<{
        name: string;
        party: string;
        age: string;
        vote: import("@prisma/client/runtime/library").JsonValue;
    }[]>;
}
//# sourceMappingURL=candidateServices.d.ts.map