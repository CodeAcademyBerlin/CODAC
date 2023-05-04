import { gql } from "@apollo/client";

export const GET_SPIKE_QUERY = gql`
  query getSpike($id: ID!) {
    spike(id: $id) {
      data {
        attributes {
          title
          day
          recording {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
