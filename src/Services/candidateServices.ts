import {prisma} from '../lib/db.js';
import { type createCandi } from '../Graphql/candidate/resolvers.js';

export default class CandidateClass{
    public static async createCandidate(payload:createCandi){
        const {name,party,age} = payload;
        return await prisma.candidates.create({
            data:{
                name,
                party,
                age,
                vote:[]
            }
        })
    }
    public static async allCandidate(){
        return await prisma.candidates.findMany();
    }
}