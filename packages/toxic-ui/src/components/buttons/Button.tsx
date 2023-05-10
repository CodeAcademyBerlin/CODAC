import React from "react";

import type { ButtonProps } from "../../interfaces/interfaceButtons";
/**
 * This is the documentation of the button
 */
export const Button = ({
  label,
  padding,
  bg,
  text,
  border,
  shape,
}: ButtonProps) => {
  return (
    <button
      className={`
      ${padding ? padding : "px-10 py-2"}
      ${bg ? bg : "bg-primary dark:bg-green-300"}
      ${text ? text : "text-light"}
      ${border ? `border-2 ${border}` : "border-2 border-primary"}
      ${shape ? shape : "rounded"}
       text-2xl duration-300 active:translate-y-2`}
    >
      {label}
    </button>
  );
};
