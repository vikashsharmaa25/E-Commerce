const { gql } = require("@apollo/client");

export const GET_ALL_PRODUCTS = gql`
  query getProductData {
    products {
      data {
        id
        attributes {
          title
          price
          quantity_availbale
          FeaturedProduct
          media {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCTS_BY_ID = gql`
  query getProductById($productId: ID) {
    product(id: $productId) {
      data {
        id
        attributes {
          title
          slug
          description
          media {
            data {
              id
              attributes {
                url
              }
            }
          }
          price
          quantity_availbale
          FeaturedProduct
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;
