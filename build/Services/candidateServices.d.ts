import { type createCandi } from '../Graphql/candidate/resolvers.js';
type votes = {
    party: String;
    vote: String;
};
export default class CandidateClass {
    static createCandidate(payload: createCandi): Promise<"You are Not eligible for Candidates of Election" | "Party Name Already Exists" | "Candidate Created!">;
    static allCandidate(): Promise<{
        name: string;
        party: string;
        age: string;
        vote: import("@prisma/client/runtime/library").JsonValue;
    }[]>;
    static voteCount(): Promise<votes[]>;
}
export {};
//# sourceMappingURL=candidateServices.d.ts.map