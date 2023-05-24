import * as Types from './schema';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetChallengesDocument = gql`
    query getChallenges {
  codingChallenges {
    data {
      attributes {
        challenge
        difficulty
      }
    }
  }
}
    `;

/**
 * __useGetChallengesQuery__
 *
 * To run a query within a React component, call `useGetChallengesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChallengesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChallengesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChallengesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetChallengesQuery, Types.GetChallengesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetChallengesQuery, Types.GetChallengesQueryVariables>(GetChallengesDocument, options);
      }
export function useGetChallengesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetChallengesQuery, Types.GetChallengesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetChallengesQuery, Types.GetChallengesQueryVariables>(GetChallengesDocument, options);
        }
export type GetChallengesQueryHookResult = ReturnType<typeof useGetChallengesQuery>;
export type GetChallengesLazyQueryHookResult = ReturnType<typeof useGetChallengesLazyQuery>;
export type GetChallengesQueryResult = Apollo.QueryResult<Types.GetChallengesQuery, Types.GetChallengesQueryVariables>;
export const GetAllCoursesDocument = gql`
    query getAllCourses {
  courses {
    data {
      id
      attributes {
        name
        description
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
        length
        projects {
          data {
            attributes {
              name
              description
              publishedAt
              spikes {
                data {
                  attributes {
                    title
                    day
                    content {
                      data {
                        attributes {
                          title
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
    }
  }
}
    `;

/**
 * __useGetAllCoursesQuery__
 *
 * To run a query within a React component, call `useGetAllCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCoursesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetAllCoursesQuery, Types.GetAllCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetAllCoursesQuery, Types.GetAllCoursesQueryVariables>(GetAllCoursesDocument, options);
      }
export function useGetAllCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetAllCoursesQuery, Types.GetAllCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetAllCoursesQuery, Types.GetAllCoursesQueryVariables>(GetAllCoursesDocument, options);
        }
export type GetAllCoursesQueryHookResult = ReturnType<typeof useGetAllCoursesQuery>;
export type GetAllCoursesLazyQueryHookResult = ReturnType<typeof useGetAllCoursesLazyQuery>;
export type GetAllCoursesQueryResult = Apollo.QueryResult<Types.GetAllCoursesQuery, Types.GetAllCoursesQueryVariables>;
export const GetCourseDocument = gql`
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

/**
 * __useGetCourseQuery__
 *
 * To run a query within a React component, call `useGetCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCourseQuery(baseOptions: Apollo.QueryHookOptions<Types.GetCourseQuery, Types.GetCourseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetCourseQuery, Types.GetCourseQueryVariables>(GetCourseDocument, options);
      }
export function useGetCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetCourseQuery, Types.GetCourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetCourseQuery, Types.GetCourseQueryVariables>(GetCourseDocument, options);
        }
export type GetCourseQueryHookResult = ReturnType<typeof useGetCourseQuery>;
export type GetCourseLazyQueryHookResult = ReturnType<typeof useGetCourseLazyQuery>;
export type GetCourseQueryResult = Apollo.QueryResult<Types.GetCourseQuery, Types.GetCourseQueryVariables>;
export const GetPageDocument = gql`
    query getPage($slug: String) {
  pages(filters: {slug: {eq: $slug}}) {
    data {
      id
      attributes {
        locale
        slug
        title
        contentSections {
          ... on ComponentSectionsHeader {
            __typename
            id
            title
            subtitle
          }
          ... on ComponentSectionsRichText {
            __typename
            id
            content
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetPageQuery__
 *
 * To run a query within a React component, call `useGetPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPageQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetPageQuery, Types.GetPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetPageQuery, Types.GetPageQueryVariables>(GetPageDocument, options);
      }
export function useGetPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetPageQuery, Types.GetPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetPageQuery, Types.GetPageQueryVariables>(GetPageDocument, options);
        }
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>;
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>;
export type GetPageQueryResult = Apollo.QueryResult<Types.GetPageQuery, Types.GetPageQueryVariables>;
export const GetPagesDocument = gql`
    query getPages {
  pages {
    data {
      id
      attributes {
        locale
        slug
        contentSections {
          ... on ComponentSectionsHeader {
            __typename
            id
            title
            subtitle
          }
          ... on ComponentSectionsRichText {
            __typename
            id
            content
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetPagesQuery__
 *
 * To run a query within a React component, call `useGetPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPagesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetPagesQuery, Types.GetPagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetPagesQuery, Types.GetPagesQueryVariables>(GetPagesDocument, options);
      }
export function useGetPagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetPagesQuery, Types.GetPagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetPagesQuery, Types.GetPagesQueryVariables>(GetPagesDocument, options);
        }
export type GetPagesQueryHookResult = ReturnType<typeof useGetPagesQuery>;
export type GetPagesLazyQueryHookResult = ReturnType<typeof useGetPagesLazyQuery>;
export type GetPagesQueryResult = Apollo.QueryResult<Types.GetPagesQuery, Types.GetPagesQueryVariables>;
export const GetProjectsDocument = gql`
    query getProjects {
  projects {
    data {
      id
      attributes {
        name
        description
        spikes {
          data {
            id
            attributes {
              title
              day
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProjectsQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetProjectsQuery, Types.GetProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetProjectsQuery, Types.GetProjectsQueryVariables>(GetProjectsDocument, options);
      }
export function useGetProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetProjectsQuery, Types.GetProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetProjectsQuery, Types.GetProjectsQueryVariables>(GetProjectsDocument, options);
        }
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsLazyQueryHookResult = ReturnType<typeof useGetProjectsLazyQuery>;
export type GetProjectsQueryResult = Apollo.QueryResult<Types.GetProjectsQuery, Types.GetProjectsQueryVariables>;
export const GetSpikesDocument = gql`
    query getSpikes {
  spikes {
    data {
      id
      attributes {
        title
        day
        recording {
          data {
            attributes {
              __typename
              url
            }
          }
        }
        content {
          data {
            attributes {
              __typename
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetSpikesQuery__
 *
 * To run a query within a React component, call `useGetSpikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpikesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpikesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetSpikesQuery, Types.GetSpikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetSpikesQuery, Types.GetSpikesQueryVariables>(GetSpikesDocument, options);
      }
export function useGetSpikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetSpikesQuery, Types.GetSpikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetSpikesQuery, Types.GetSpikesQueryVariables>(GetSpikesDocument, options);
        }
export type GetSpikesQueryHookResult = ReturnType<typeof useGetSpikesQuery>;
export type GetSpikesLazyQueryHookResult = ReturnType<typeof useGetSpikesLazyQuery>;
export type GetSpikesQueryResult = Apollo.QueryResult<Types.GetSpikesQuery, Types.GetSpikesQueryVariables>;
export const GetSpikeDocument = gql`
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

/**
 * __useGetSpikeQuery__
 *
 * To run a query within a React component, call `useGetSpikeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpikeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpikeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSpikeQuery(baseOptions: Apollo.QueryHookOptions<Types.GetSpikeQuery, Types.GetSpikeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetSpikeQuery, Types.GetSpikeQueryVariables>(GetSpikeDocument, options);
      }
export function useGetSpikeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetSpikeQuery, Types.GetSpikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetSpikeQuery, Types.GetSpikeQueryVariables>(GetSpikeDocument, options);
        }
export type GetSpikeQueryHookResult = ReturnType<typeof useGetSpikeQuery>;
export type GetSpikeLazyQueryHookResult = ReturnType<typeof useGetSpikeLazyQuery>;
export type GetSpikeQueryResult = Apollo.QueryResult<Types.GetSpikeQuery, Types.GetSpikeQueryVariables>;
export const GetMeDocument = gql`
    query getMe {
  me {
    id
    role {
      id
      name
    }
    email
    id
    username
    firstname
    lastname
    avatar {
      url
    }
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetMeQuery, Types.GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetMeQuery, Types.GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetMeQuery, Types.GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetMeQuery, Types.GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<Types.GetMeQuery, Types.GetMeQueryVariables>;