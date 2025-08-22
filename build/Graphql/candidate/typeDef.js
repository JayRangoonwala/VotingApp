export const typeDefs = `
    type Candidates{
        name:String!
        party:String!
        age:String!
        vote:[Vote!]!
    }
    type Vote{
        userId:String!
        time:String!
    }
    type VoteCount{
        party:String!
        vote:String!
    }
`;
//# sourceMappingURL=typeDef.js.map