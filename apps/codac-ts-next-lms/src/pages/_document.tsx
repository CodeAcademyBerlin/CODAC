import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link
          href="/favicon/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#000000"
          href="/favicon/safari-pinned-tab.svg"
          rel="mask-icon"
        /> 
        <link href="public/favicon.ico" rel="shortcut icon" />*/}
      </Head>
      <body className="dark:bg-gray-1100 overflow-y-scroll bg-gray-300 bg-[url('/grid.svg')]">
        {/* <body className="overflow-y-scroll bg-[url('/grid.svg')] "> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
