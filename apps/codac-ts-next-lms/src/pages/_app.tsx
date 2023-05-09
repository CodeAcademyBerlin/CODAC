import { ApolloProvider } from "@apollo/client";
import "codac-ui/styles/main.css";
// import "styles/globals.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Router from "next/router";
// // ** Loader Import
import NProgress from "nprogress";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";

import { AuthProvider } from "../contexts/authContext";

import { useApollo } from "../lib/apolloClient";

import { Layout, GlobalNav, ThemeProvider } from "codac-ui";
import { navigation } from "../lib/navigation";
import { Theme } from "tsparticles-engine";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// ** Pace Loader
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

// ** Configure JSS & ClassName
const CodacApp: NextPageWithLayout<AppPropsWithLayout> = ({
  Component,
  pageProps,
  // emotionCache = clientSideEmotionCache,
}) => {
  const apolloClient = useApollo(pageProps);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <Layout
        navigation={<GlobalNav navigation={navigation} header="CODAC LMS" />}
      >
        {page}
      </Layout>
    ));

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <ThemeProvider>
            {/* <Component {...pageProps} /> */}
            {/*  <SocketProvider> */}
            {getLayout(<Component {...pageProps} />)}
            {/* <Layout>
          </Layout> */}
            {/* <SettingsProvider>
                <SettingsConsumer>
                  {({ settings }) => {
                    return (
                      <ThemeComponent settings={settings}>
                        {getLayout(<Component {...pageProps} />, loading)}
                      </ThemeComponent>
                    );
                  }}
                </SettingsConsumer>
              </SettingsProvider> 
          </SocketProvider>*/}
          </ThemeProvider>
        </AuthProvider>
      </ApolloProvider>
    </>
  );
};

export default CodacApp;
