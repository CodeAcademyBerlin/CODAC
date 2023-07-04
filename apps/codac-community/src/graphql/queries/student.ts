import { gql } from "@apollo/client";


export const GetStudentByIdDocument = gql`
  query getStudentById($id: ID!) {
    student(id: $id) {
      data {
        id

        attributes {
          firstname
          github
          linkedin
          start_date

          user {
            data {
              attributes {
                username
                courses {
                  data {
                    attributes {
                      name
                    }
                  }
                }

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
