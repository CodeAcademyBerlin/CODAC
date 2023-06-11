import "#/styles.css";

import { ApolloProvider } from "@apollo/client";
import { DashboardLayout, GlobalNav, ThemeProvider } from "codac-ui";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { type ReactElement, type ReactNode, useEffect, useState } from "react";

import { AuthProvider } from "#/contexts/authContext";
import { useApollo } from "#/lib/apolloClient";
import Auth from "#/components/auth";
import MainLayout from "#/components/main-layout";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const CodacApp: NextPageWithLayout<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  // const getLayout = Component.getLayout ?? MainLayout;
  const getLayout = Component.getLayout ?? ((page) => <MainLayout>{page};</MainLayout>);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <ThemeProvider enableColorScheme={false}>
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </AuthProvider>
      </ApolloProvider>
    </>
  );
};

export default CodacApp;
