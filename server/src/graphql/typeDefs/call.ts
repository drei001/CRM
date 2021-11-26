import { gql } from 'apollo-server-express';

const callTypeDefs = gql`
  type Call {
    id: ID!
    user: Lead!
    created_at: String!
    callType: String!
    callStatus: String!
  }

  extend type Query {
    getCalls: [Call]
    getCallsByLeadId(user: ID!): [Call]
    getCall: Call
  }

  extend type Mutation {
    addCall(user: ID!, callType: String!, callStatus: String!): Call!
    updateCall(id: ID!, callType: String, callStatus: String): Call!
    deleteCall(id: ID!): Call
  }
`;

export default callTypeDefs;
