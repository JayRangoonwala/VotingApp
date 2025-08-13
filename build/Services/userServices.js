import { prisma } from '../lib/db.js';
export default class UserService {
    static async createUser(payload) {
        const { name, email, password, aadharcard, age, mobile } = payload;
        return await prisma.user.create({
            data: {
                name: name,
                email: email ?? null,
                password,
                aadharCard: aadharcard,
                age,
                mobile
            }
        });
    }
}
//# sourceMappingURL=userServices.js.map