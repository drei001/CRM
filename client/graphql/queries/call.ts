import { gql } from '@apollo/client';

export const GET_LEAD_CALLS = gql`
  query getCallsByLeadId($user: ID) {
    getCallsByLeadId(user: $user) {
      user
      created_at
      callType
      callStatus
      lead {
        leadId
        firstName
        lastName
        email
        contactNo
        address
        avatar
        source
        created
      }
    }
  }
`;
