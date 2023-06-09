import "#/styles.css";

import { ApolloProvider } from "@apollo/client";
import { BlankLayout, DashboardLayout, GlobalNav, ThemeProvider } from "codac-ui";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { type ReactElement, type ReactNode, useEffect, useState } from "react";

import { navigation } from "#/constants/navigation";
import { AuthProvider } from "#/contexts/authContext";
import { useApollo } from "#/lib/apolloClient";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const CodacApp: NextPageWithLayout<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  const getLayout =
    Component.getLayout ??
    ((page) => (
      <DashboardLayout
        navigation={
          <GlobalNav
            appDir={false}
            navigation={navigation}
            header="CODAC COMMUNITY"
            authentication={""}
          />
        }
      >
        {page};
      </DashboardLayout>
    ));

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
