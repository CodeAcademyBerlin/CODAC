import NextTopLoader from "nextjs-toploader";

import { AddressBar } from "./address-bar";

export function DashboardLayout({
  children,
  navigation,
}: {
  children: React.ReactNode;
  navigation: React.ReactNode | null;
}) {
  return (
    <>
      <NextTopLoader
        color="#FF0080"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
      {navigation}

      <div className="lg:pl-72">
        <div className="mx-auto  space-y-8 px-2 pt-20  lg:px-8 lg:py-8">
          <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-slate-200 dark:bg-black">
              <AddressBar />
            </div>
          </div>

          <div className=" bg-gray-300-border-gradient rounded-lg border border-slate-900 bg-slate-200 p-px shadow-lg shadow-black dark:bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)]">
            <div className="rounded-lg p-3.5 lg:p-6">{children}</div>
          </div>

          {/* <Byline className="fixed sm:hidden" /> */}
        </div>
      </div>
    </>
  );
}
