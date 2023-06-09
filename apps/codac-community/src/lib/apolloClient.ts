/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  type NormalizedCacheObject,
} from "@apollo/client";
import { onError } from "@apollo/link-error";
import { createUploadLink } from "apollo-upload-client";
import merge from "deepmerge";
import fetch from "isomorphic-unfetch";
import isEqual from "lodash.isequal";
import type { AppProps } from "next/app";
import { parseCookies } from "nookies";
import { useMemo } from "react";

import { COOKIES_TOKEN_NAME } from "#/constants";

const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

export const getToken = () => {
  if (typeof window !== "undefined") {
    const parsedCookies = parseCookies();
    return parsedCookies[COOKIES_TOKEN_NAME];
  } else return "";
};

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = ({ ssgToken }: { ssgToken: boolean }) => {
  // isomorphic fetch for passing the cookies along with each GraphQL request
  const enhancedFetch = async (url: RequestInfo, init: RequestInit) => {
    const token = ssgToken ? process.env.CODAC_SSG_TOKEN! : getToken();
    const response = await fetch(url, {
      ...init,
      headers: {
        ...init.headers,
        // here we pass the cookie along for each request
        authorization: token ? `Bearer ${token}` : "",
      },
    });
    return response;
  };

  return new ApolloClient({
    // SSR only for Node.js
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message }) => {
            console.log(`[GraphQL error]: Message: ${message}`);
          });
        if (networkError)
          console.log(
            `[Network error]: ${networkError.message}. Backend is unreachable. Is it running?`
          );
      }),
      // this uses apollo-link-http under the hood, so all the options here come from that package
      createUploadLink({
        uri: `${process.env.NEXT_PUBLIC_CODAC_SERVER_URL ?? ""}/graphql`,
        // Make sure that CORS and cookies work
        fetchOptions: {
          mode: "cors",
        },
        credentials: "include",
        fetch: enhancedFetch,
      }),
    ]),
    cache: new InMemoryCache(),
    // SSG ISR bugfix apollo
    defaultOptions: {
      query: {
        fetchPolicy: "no-cache",
      },
    },
  });
};

export const initializeApollo = (initialState?: NormalizedCacheObject, ssgToken = false) => {
  const _apolloClient = apolloClient ?? createApolloClient({ ssgToken });
  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data: NormalizedCacheObject = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)

      arrayMerge: (
        destinationArray: NormalizedCacheObject[],
        sourceArray: NormalizedCacheObject[]
      ) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const addApolloState = (
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: AppProps["pageProps"]
) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return (pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract());
};

//  client side provider
export function useApollo(pageProps: { [APOLLO_STATE_PROP_NAME]: any }) {
  const state: any = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo({ initialState: state }), [state]);
  return store;
}
