import { gql } from "@apollo/client";

export const GetStudentsByCohortDocument = gql`
  query getStudentsByCohort($cohortName: String) {
    students(filters: { cohort: { name: { eq: $cohortName } } }) {
      data {
        id
        attributes {
          firstname
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
          course {
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
export const GetCohortByNameDocument = gql`
  query getCohortByName($cohortName: String) {
    cohorts(filters: { name: { eq: $cohortName } }) {
      data {
        id
        attributes {
          name
          start_date
          logo {
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