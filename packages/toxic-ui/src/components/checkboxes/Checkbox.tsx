import React, { useState } from "react";

import type { checkBoxI } from "../../interfaces/interfaceCheckboxes";

/**
 * This is the documentation of the checkbox
 */

const Checkbox = ({ background, checkDotColor }: checkBoxI) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div
      onClick={handleClick}
      className={`flex h-5 w-10 cursor-pointer items-center justify-center rounded-full
      ${background ? background : "bg-primary"}
          `}
    >
      <div
        className={`h-5 w-5 rounded-full transition-all duration-200 ease-in-out
        ${active ? "-translate-x-1/2" : "translate-x-1/2"}
        ${checkDotColor ? checkDotColor : "bg-light"}
        `}
      ></div>
    </div>
  );
};

export default Checkbox;
