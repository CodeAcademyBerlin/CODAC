import "../styles/globals.css";
// include styles from the ui package
import "codac-ui/styles.css";

import { ApolloProvider } from "@apollo/client";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
// // ** Loader Import
import NProgress from "nprogress";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";

import favicon from "../../public/favicon.ico";
import { AuthProvider } from "../contexts/authContext";
// import {
//   SettingsConsumer,
//   SettingsProvider,
// } from '../contexts/settingsContext';
// import { SocketProvider } from '../contexts/socketContext';
// import MainLayout from '../layouts/MainLayout/MainLayout';
import { useApollo } from "../lib/apolloClient";
// import ThemeComponent from '../theme/ThemeComponent';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  // emotionCache: EmotionCache;
};

// const clientSideEmotionCache = createEmotionCache();

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
  // const getLayout = Component.getLayout ?? MainLayout;
  // const getLayout = Component.getLayout ?? ((page) => <MainLayout loading={loading} >{page}</MainLayout>)

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          {/*  <SocketProvider> */}
          <Head>
            <title>CODAC</title>
            <meta
              name="Code Academy Berlin Community App"
              content={`CODAC – Code Academy Berlin Community App`}
            />
            <link rel="shortcut icon" href={favicon.src} />
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
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
        </AuthProvider>
      </ApolloProvider>
    </>
  );
};

export default CodacApp;
