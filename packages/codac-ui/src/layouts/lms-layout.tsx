import clsx from "clsx";
import type { ReactNode } from "react";

export function LMSLayout({
  children,
  topNav,
  sideNav,
}: {
  children: ReactNode;
  topNav?: ReactNode;
  sideNav?: ReactNode;
}) {
  return (
    <>
      <div
        className={clsx("bg-zinc-950 transition-all duration-500", {
          "lg:ml-64": sideNav,
        })}
      >
        {topNav && topNav}
      </div>
      {sideNav && sideNav}
      {/* {sideNav && (
        <div className="absolute top-24 z-10 flex w-full flex-col border-b border-gray-800 bg-gray-200 dark:bg-zinc-950  lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
          {sideNav}
        </div>
      )} */}
      <div className="lg:pl-72">
        <div className="mx-auto space-y-8 px-2 pt-3  lg:px-8 lg:py-8 lg:pt-10">
          {/* {navigation} */}
          {/*<div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-black">
              <LMSAddressBar />
            </div>
          </div> */}

          <div className="bg-gray-300-border-gradient rounded-lg border border-slate-900 bg-zinc-950 p-px shadow-lg shadow-black dark:bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)]">
            <div className="rounded-lg p-3.5 lg:p-6">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
