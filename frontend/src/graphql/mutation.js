const { gql } = require("@apollo/client");

export const LOGIN_URL = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        email
        username
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation Register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        email
      }
    }
  }
`;
