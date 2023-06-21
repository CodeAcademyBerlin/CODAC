import { gql } from "@apollo/client";

export const GetStudentsByCohortDocument = gql`
  query getStudentsByCohort($cohortName: String) {
    students(filters: { cohort: { name: { eq: $cohortName } } }) {
      data {
        id
        attributes {
          firstname
          lastname
          github
          linkedin
          createdAt
          user {
            data {
              attributes {
                email
                avatar {
                  data {
                    attributes {
                      url
                      previewUrl
                    }
                  }
                }
              }
            }
          }
          cohort {
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
