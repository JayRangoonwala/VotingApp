interface createUser {
    name: string;
    email?: string | null;
    password: string;
    aadharcard: string;
    age: string;
    mobile: string;
}
type userLogin = {
    aadharcard: string;
    password: string;
};
export default class UserService {
    static createUser(payload: createUser): Promise<{
        name: string;
        email: string | null;
        password: string;
        mobile: string;
        age: string;
        aadharCard: string;
        role: import("@prisma/client").$Enums.Vote;
        isVoted: boolean;
        id: number;
    }>;
    static givingVotes(payload: {
        party: string;
    }, context: any): Promise<"Please Login!" | "You are not eligible" | "You Have Already Given Vote" | "Vote Given Successfully">;
    static userLogin(data: userLogin): Promise<string>;
}
export {};
//# sourceMappingURL=userServices.d.ts.map