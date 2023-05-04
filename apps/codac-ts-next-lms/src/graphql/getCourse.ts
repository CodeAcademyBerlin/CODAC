import { gql } from "@apollo/client";

export const GET_COURSE_QUERY = gql`
  query getCourse($id: ID!) {
    course(id: $id) {
      data {
        attributes {
          name
          description
          length
          createdAt
          projects {
            data {
              attributes {
                description
                spikes {
                  data {
                    attributes {
                      title
                    }
                  }
                }
              }
            }
          }
          mentors {
            data {
              attributes {
                user {
                  data {
                    attributes {
                      firstname
                      lastname
                      email
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
