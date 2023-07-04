import { gql } from "@apollo/client";
export const GetMentorsAllDocument = gql`
  query getAllStaffs {
    mentors {
      data {
        id
        attributes {
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
                courses {
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
      }
    }
  }
`;

export const GetMentorIdDocument = gql`
  query getStaffById($id: ID!) {
    mentor(id: $id) {
      data {
        id
        attributes {
          github
          linkedin
          createdAt

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
                courses {
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
      }
    }
  }
`;
