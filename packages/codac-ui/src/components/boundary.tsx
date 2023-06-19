import clsx from "clsx";
import React from "react";

import { Label } from "./label";

export const Boundary = ({
  children,
  labels = [""],
  size = "default",
  color = "default",
  animateRerendering = true,
}: {
  children: React.ReactNode;
  labels?: string[];
  size?: "small" | "default";
  color?: "default" | "pink" | "blue" | "violet" | "cyan" | "orange";
  animateRerendering?: boolean;
}) => {
  return (
    <div
      className={clsx("relative rounded-lg border border-dashed", {
        "p-3 lg:p-5": size === "small",
        "p-4 lg:p-9": size === "default",
        "border-gray-700": color === "default",
        "border-codac-pink": color === "pink",
        "border-codac-blue": color === "blue",
        "border-codac-cyan": color === "cyan",
        "border-codac-violet": color === "violet",
        "border-codac-orange": color === "orange",
        "text-codac-pink animate-[rerender_1s_ease-in-out_1]": animateRerendering,
      })}
    >
      <div
        className={clsx(
          "absolute -top-2.5 flex gap-x-1 text-[9px] uppercase leading-4 tracking-widest",
          {
            "left-3 lg:left-5": size === "small",
            "left-4 lg:left-9": size === "default",
          }
        )}
      >
        {labels.map((label) => {
          return (
            <Label key={label} color={color} animateRerendering={animateRerendering}>
              {label}
            </Label>
          );
        })}
      </div>

      {children}
    </div>
  );
};
