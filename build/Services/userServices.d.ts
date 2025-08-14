interface createUser {
    name: string;
    email?: string | null;
    password: string;
    aadharcard: string;
    age: string;
    mobile: string;
}
export default class UserService {
    static createUser(payload: createUser): Promise<{
        id: number;
        name: string;
        email: string | null;
        password: string;
        mobile: string;
        age: string;
        aadharCard: string;
        role: import("@prisma/client").$Enums.Vote;
        isVoted: boolean;
    }>;
    static givingVotes(payload: {
        party: string;
    }): Promise<void>;
}
export {};
//# sourceMappingURL=userServices.d.ts.map