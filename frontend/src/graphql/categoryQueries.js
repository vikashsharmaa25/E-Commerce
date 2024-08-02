import { gql } from "@apollo/client";

export const GET_ALL_CATEGORY = gql`
  query getAllCategory {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;
