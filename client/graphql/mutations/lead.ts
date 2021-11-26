import { gql } from '@apollo/client';

export const UPDATE_LEAD = gql`
  mutation updateLead(
    $id: ID!
    $firstName: String
    $lastName: String
    $email: String
    $contactNo: String
    $address: String
  ) {
    updateLead(
      id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
      contactNo: $contactNo
      address: $address
    ) {
      firstName
      lastName
      email
      contactNo
      address
    }
  }
`;

export const ADD_LEAD = gql`
  mutation createLead(
    $firstName: String!
    $lastName: String!
    $email: String!
    $contactNo: String!
    $address: String!
  ) {
    createLead(
      firstName: $firstName
      lastName: $lastName
      email: $email
      contactNo: $contactNo
      address: $address
    ) {
      firstName
      lastName
      email
      contactNo
      address
    }
  }
`;

export const DELETE_LEAD = gql`
  mutation deleteLead($id: ID!) {
    deleteLead(id: $id) {
      firstName
      lastName
      email
      contactNo
      address
    }
  }
`;
