import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

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
                          shortName
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
export function useGetAllCoursesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCoursesQuery, GetAllCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCoursesQuery, GetAllCoursesQueryVariables>(GetAllCoursesDocument, options);
      }
export function useGetAllCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCoursesQuery, GetAllCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCoursesQuery, GetAllCoursesQueryVariables>(GetAllCoursesDocument, options);
        }
export type GetAllCoursesQueryHookResult = ReturnType<typeof useGetAllCoursesQuery>;
export type GetAllCoursesLazyQueryHookResult = ReturnType<typeof useGetAllCoursesLazyQuery>;
export type GetAllCoursesQueryResult = Apollo.QueryResult<GetAllCoursesQuery, GetAllCoursesQueryVariables>;
export type GetAllCoursesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllCoursesQuery = { __typename?: 'Query', courses?: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', id?: string | null, attributes?: { __typename?: 'Course', name?: string | null, description?: string | null, length?: number | null, mentors?: { __typename?: 'MentorRelationResponseCollection', data: Array<{ __typename?: 'MentorEntity', attributes?: { __typename?: 'Mentor', user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', firstname?: string | null, lastname?: string | null, email: string } | null } | null } | null } | null }> } | null, projects?: { __typename?: 'ProjectRelationResponseCollection', data: Array<{ __typename?: 'ProjectEntity', attributes?: { __typename?: 'Project', name?: string | null, description?: string | null, publishedAt?: any | null, spikes?: { __typename?: 'SpikeRelationResponseCollection', data: Array<{ __typename?: 'SpikeEntity', attributes?: { __typename?: 'Spike', title?: string | null, day?: number | null, content?: { __typename?: 'PageEntityResponse', data?: { __typename?: 'PageEntity', attributes?: { __typename?: 'Page', shortName?: string | null } | null } | null } | null } | null }> } | null } | null }> } | null } | null }> } | null };
