import * as Types from '../../global/__generated__/types';

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
export function useGetChallengesQuery(baseOptions?: Apollo.QueryHookOptions<GetChallengesQuery, GetChallengesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChallengesQuery, GetChallengesQueryVariables>(GetChallengesDocument, options);
      }
export function useGetChallengesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChallengesQuery, GetChallengesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChallengesQuery, GetChallengesQueryVariables>(GetChallengesDocument, options);
        }
export type GetChallengesQueryHookResult = ReturnType<typeof useGetChallengesQuery>;
export type GetChallengesLazyQueryHookResult = ReturnType<typeof useGetChallengesLazyQuery>;
export type GetChallengesQueryResult = Apollo.QueryResult<GetChallengesQuery, GetChallengesQueryVariables>;
export type GetChallengesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetChallengesQuery = { __typename?: 'Query', codingChallenges?: { __typename?: 'CodingChallengeEntityResponseCollection', data: Array<{ __typename?: 'CodingChallengeEntity', attributes?: { __typename?: 'CodingChallenge', challenge?: string | null, difficulty?: number | null } | null }> } | null };
