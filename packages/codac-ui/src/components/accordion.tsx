"use client";
import clsx from "clsx";
import React, { ReactNode, useState } from "react";

import { ArrowRightIcon } from "../icons";

type Props = {
  children: ReactNode;
  title?: string;
  isSegment?: boolean;
};

export const Accordion = ({ children, title, isSegment = false }: Props) => {
  const [open, setOpen] = useState(isSegment);
  return (
    <div>
      <div
        className="flex cursor-pointer items-center transition-all ease-in"
        onClick={() => setOpen(!open)}
      >
        {title && <div className="flex-1">{title}</div>}
        <ArrowRightIcon
          className={clsx("fill-codac-pink h-3 w-3", {
            ["rotate-90"]: !open,
            ["-rotate-90"]: open,
          })}
        />
      </div>

      <div
        className={clsx("mt-3 transition duration-300 ease-in-out", {
          ["block"]: open,
          ["hidden"]: !open,
        })}
      >
        {children}
      </div>
    </div>
  );
};
