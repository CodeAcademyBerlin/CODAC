import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetSpikeDocument = gql`
    query getSpike($id: ID!) {
  spike(id: $id) {
    data {
      id
      attributes {
        title
        day
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
export function useGetSpikeQuery(baseOptions: Apollo.QueryHookOptions<GetSpikeQuery, GetSpikeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpikeQuery, GetSpikeQueryVariables>(GetSpikeDocument, options);
      }
export function useGetSpikeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpikeQuery, GetSpikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpikeQuery, GetSpikeQueryVariables>(GetSpikeDocument, options);
        }
export type GetSpikeQueryHookResult = ReturnType<typeof useGetSpikeQuery>;
export type GetSpikeLazyQueryHookResult = ReturnType<typeof useGetSpikeLazyQuery>;
export type GetSpikeQueryResult = Apollo.QueryResult<GetSpikeQuery, GetSpikeQueryVariables>;
export type GetSpikeQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type GetSpikeQuery = { __typename?: 'Query', spike?: { __typename?: 'SpikeEntityResponse', data?: { __typename?: 'SpikeEntity', id?: string | null, attributes?: { __typename?: 'Spike', title?: string | null, day?: number | null } | null } | null } | null };
