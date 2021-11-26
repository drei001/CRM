import { gql } from 'apollo-server-express';

const typeDef = gql`
  type Lead {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    contactNo: String!
    address: String!
    avatar: String
    source: String
    created_at: String
  }

  #Queries
  type Query {
    getAllLeads(searchInput: String): [Lead]
    getLead(id: ID!): Lead
  }

  type Mutation {
    createLead(
      firstName: String!
      lastName: String!
      email: String!
      contactNo: String!
      address: String!
      avatar: String
      source: String
    ): Lead
    updateLead(
      id: ID!
      firstName: String
      lastName: String
      email: String
      contactNo: String
      address: String
      avatar: String
      source: String
    ): Lead!
    deleteLead(id: ID!): Lead
  }
`;
export default typeDef;
