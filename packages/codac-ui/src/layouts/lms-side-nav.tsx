"use client";
import clsx from "clsx";
import React, { ReactNode, useEffect, useRef, useState } from "react";

import { ArrowRightIcon } from "../icons";

export interface LMSNavProps {
  content: ReactNode;
}
export function LMSSideNav({ content }: LMSNavProps) {
  const [isOpen, setIsOpen] = useState(true);

  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // only add the event listener when the menu is opened
    if (!isOpen) return;
    function handleClick(event: { target: any }) {
      if (menu.current && !menu.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [isOpen]);

  return (
    <div className="lg:ml-72">
      <div
        ref={menu}
        className={clsx("fixed top-2 z-30 h-10 w-10 transition-all duration-500 lg:hidden", {
          "left-52": isOpen,
          "left-0": !isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
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
        {content}
      </div>
    </div>
  );
}
