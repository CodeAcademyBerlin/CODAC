import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

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
export function useGetSpikesQuery(baseOptions?: Apollo.QueryHookOptions<GetSpikesQuery, GetSpikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpikesQuery, GetSpikesQueryVariables>(GetSpikesDocument, options);
      }
export function useGetSpikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpikesQuery, GetSpikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpikesQuery, GetSpikesQueryVariables>(GetSpikesDocument, options);
        }
export type GetSpikesQueryHookResult = ReturnType<typeof useGetSpikesQuery>;
export type GetSpikesLazyQueryHookResult = ReturnType<typeof useGetSpikesLazyQuery>;
export type GetSpikesQueryResult = Apollo.QueryResult<GetSpikesQuery, GetSpikesQueryVariables>;
export type GetSpikesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetSpikesQuery = { __typename?: 'Query', spikes?: { __typename?: 'SpikeEntityResponseCollection', data: Array<{ __typename?: 'SpikeEntity', id?: string | null, attributes?: { __typename?: 'Spike', title?: string | null, day?: number | null, recording?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename: 'UploadFile', url: string } | null } | null } | null, content?: { __typename?: 'PageEntityResponse', data?: { __typename?: 'PageEntity', attributes?: { __typename: 'Page' } | null } | null } | null } | null }> } | null };
