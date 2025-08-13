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
        name: string;
        email: string | null;
        password: string;
        age: string;
        mobile: string;
        id: number;
        aadharCard: string;
        role: import("@prisma/client").$Enums.Vote;
        isVoted: boolean;
    }>;
}
export {};
//# sourceMappingURL=userServices.d.ts.map