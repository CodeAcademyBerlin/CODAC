import clsx from "clsx";
import type { ReactNode } from "react";

import { LMSSideNav } from "./lms-side-nav";

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
      {sideNav && <LMSSideNav content={sideNav} />}
      <div className="lg:pl-72">
        <div className="mx-auto space-y-8 px-2 pt-3  lg:px-8 lg:py-8 lg:pt-10">
          <div className="bg-gray-300-border-gradient rounded-lg border border-slate-900 bg-zinc-950 p-px shadow-lg shadow-black dark:bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)]">
            <div className="rounded-lg p-3.5 lg:p-6">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
