import "#/styles.css";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "codac-ui";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { type ReactElement, type ReactNode } from "react";

import MainLayout from "#/components/main-layout";
import { AuthProvider } from "#/contexts/authContext";
import { SocketProvider } from "#/contexts/socketContext";
import { useApollo } from "#/lib/apolloClient";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const CodacApp: NextPageWithLayout<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  const getLayout = Component.getLayout ?? ((page) => <MainLayout>{page};</MainLayout>);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <SocketProvider>
            <ThemeProvider enableColorScheme={false}>
              {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
          </SocketProvider>
        </AuthProvider>
      </ApolloProvider>
    </>
  );
};

export default CodacApp;
