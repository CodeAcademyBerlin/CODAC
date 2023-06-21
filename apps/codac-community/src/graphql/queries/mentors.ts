import { gql } from "@apollo/client";
export const GetMentorsAllDocument = gql`
  query getAllStaffs {
    mentors {
      data {
        id
        attributes {
          github
          linkedin
          createdAt
          user {
            data {
              attributes {
                email
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
