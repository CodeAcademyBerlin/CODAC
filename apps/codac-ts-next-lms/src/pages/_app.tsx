// import "codac-ui/input.css";
import "../styles.css";

import { ApolloProvider } from "@apollo/client";
import { GlobalNav, Layout, ThemeProvider } from "codac-ui";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Router from "next/router";
// // ** Loader Import
import NProgress from "nprogress";
import React, { type ReactElement, type ReactNode, useEffect, useState } from "react";

import { AuthProvider } from "../contexts/authContext";
import { useApollo } from "../lib/apolloClient";
import { navigation } from "constants/navigation";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
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
      <Layout navigation={<GlobalNav navigation={navigation} header="CODAC LMS" />}>{page}</Layout>
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
