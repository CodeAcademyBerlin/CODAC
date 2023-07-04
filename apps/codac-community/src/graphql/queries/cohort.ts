import { gql } from "@apollo/client";

export const GetStudentsByCohortDocument = gql`
  query getStudentsByCohort($cohortName: String) {
    students(filters: { cohort: { name: { eq: $cohortName } } }) {
      data {
        id
        attributes {
          firstname
          start_date
          course {
            data {
              attributes {
                name
              }
            }
          }
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
// export const GetCohortDocument = gql`
// query getCohorts {
//   cohorts {
//     data {
//       attributes {
//         name
//         start_date
//         logo {
//           data {
//             attributes {
//               url
//               alternativeText
//               caption
//               previewUrl
//             }
//           }
//         }
//         students {
//           data {
//             id
//             attributes {
//               start_date
//               course {
//                 data {
//                   attributes {
//                     name
//                   }
//                 }
//               }
//               user {
//                 data {
//                   id
//                   attributes {
//                     firstname
//                     lastname

//                     avatar {
//                       data {
//                         attributes {
//                           url
//                           alternativeText
//                           name
//                           caption
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }`
