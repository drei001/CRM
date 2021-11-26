import { gql } from '@apollo/client';

export const GET_LEADS = gql`
  query leads($searchInput: String) {
    getAllLeads(searchInput: $searchInput) {
      id
      firstName
      firstName
      lastName
      email
      contactNo
      address
      created_at
    }
  }
`;

export const GET_LEAD = gql`
  query lead($id: ID!) {
    getLead(id: $id) {
      firstName
      lastName
      email
      contactNo
      address
    }
  }
`;

export const GET_LEAD_WITH_CALLS = gql`
  query getLeadWithCalls($leadId: ID!) {
    getCallsByLeadId(user: $leadId) {
      id
      callType
      callStatus
      created_at
    }
    getLead(id: $leadId) {
      id
      firstName
      lastName
      address
      email
      contactNo
    }
  }
`;
