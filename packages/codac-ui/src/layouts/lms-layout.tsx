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
        className={clsx("bg-gray-300-border-gradient transition-all duration-500", {
          "lg:ml-64": sideNav,
        })}
      >
        {topNav && topNav}
      </div>
      {sideNav && <LMSSideNav content={sideNav} />}
      <div
        className={clsx({
          "lg:ml-64": sideNav,
        })}
      >
        <div className="mx-auto min-h-[80%] space-y-8 px-2 pt-3 shadow-xl lg:px-8 lg:py-8 lg:pt-10">
          <div className="border-primary/[.2] bg-gray-300-border-gradient rounded-lg border bg-zinc-950 p-px shadow-lg shadow-black dark:bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)]">
            <div className="rounded-lg p-3.5 lg:p-6">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
