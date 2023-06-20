import clsx from "clsx";
import React, { ReactNode } from "react";

import { ArrowRightIcon } from "../icons";

export interface LMSNavProps {
  content: ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}
export function LMSSideNav({ content, isOpen, toggleOpen }: LMSNavProps) {
  return (
    <>
      <div
        className={clsx("fixed top-2 z-30 h-10 w-10 transition-all duration-500 lg:hidden", {
          "left-52": isOpen,
          "left-0": !isOpen,
        })}
        onClick={() => {
          toggleOpen();
        }}
      >
        <ArrowRightIcon
          className={clsx("fill-primary", {
            "rotate-0": !isOpen,
            "rotate-180": isOpen,
          })}
        />
      </div>
      <div
        className={clsx(
          "absolute left-0 top-0 inline-block rounded-lg transition-all duration-500",
          {
            "left-64": isOpen,
            "left-0 lg:left-64": !isOpen,
          }
        )}
      ></div>
      <div
        className={clsx(
          "fixed left-0 top-0 z-20 h-full w-64 bg-zinc-950 shadow-lg transition-all duration-500",
          {
            "translate-x-0": isOpen,
            "-translate-x-full lg:translate-x-0": !isOpen,
          }
        )}
      >
        <div className="px-6 py-4">{content}</div>
      </div>
    </>
  );
}
