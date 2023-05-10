import Head from "next/head";

export function Layout({
  children,
  navigation,
}: {
  children: React.ReactNode;
  navigation: React.ReactNode;
}) {
  return (
    <>
      {/* <Head>
        <title>CODAC</title>
        <meta
          name="Code Academy Berlin Community App"
          content={`CODAC – Code Academy Berlin Community App`}
        />
        <link rel="shortcut icon" href="public/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head> */}
      {navigation}

      <div className="lg:pl-72">
        <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20  lg:px-8 lg:py-8">
          {/* <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-black">
              <AddressBar />
            </div>
          </div> */}

          <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black">
            <div className="rounded-lg p-3.5 lg:p-6">{children}</div>
          </div>
          {/* <Byline className="fixed sm:hidden" /> */}
        </div>
      </div>
      {/* </body>
     </html> */}
    </>
  );
}
