"use client";
import clsx from "clsx";
import React, { useState } from "react";

import { ArrowRightIcon } from "../../icons";

export const SideNavToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
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
    </>
  );
};
