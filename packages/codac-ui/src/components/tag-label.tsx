import clsx from "clsx";
import React from "react";

import { Label } from "./label";

export const TagLabel = ({
  labels = [""],
  position = "right",
  color = "default",
  animateRerendering = true,
}: {
  labels?: string[];
  position?: "left" | "right";
  color?: "default" | "pink" | "blue" | "violet" | "cyan" | "orange";
  animateRerendering?: boolean;
}) => {
  return (
    <div
      className={clsx(
        "absolute -top-2.5 flex gap-x-1 text-[12px] uppercase leading-4 tracking-widest",
        {
          "left-4 lg:left-9": position === "left",
          "right-4 lg:right-9": position === "right",
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
  );
};
