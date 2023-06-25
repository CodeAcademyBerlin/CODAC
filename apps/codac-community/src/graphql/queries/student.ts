import { gql } from "@apollo/client";
export const GetStudentByIdDocument = gql`
  query getStudentById($id: ID!) {
    student(id: $id) {
      data {
        id
        attributes {
          firstname
          user {
            data {
              attributes {
                username
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
        }
      }
    }
  }
`;
