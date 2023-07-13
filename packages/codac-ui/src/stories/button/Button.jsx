import React from "react";
import "./button.css";
/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, darkmode = false, label, ...props }) => {
    const isDarkmode = darkmode ? "darkmode" : "lightmode";
    const isPrimary = primary ? "primary" : "secondary";
    // const sendIcon = darkmode ? sendIconBlack : sendIconWhite;
    // const joinIcon = darkmode ? joinIconBlack : joinIconWhite;
    return (<button type="button" className={["storybook-button", isDarkmode, isPrimary].join(" ")} {...props}>
      {/* {label === "Send" ? (
          <Image className="icon" src={sendIcon} alt="" width={30} height={30} />
        ) : label === "Join" ? (
          <Image className="icon" src={joinIcon} alt="" width={30} height={30} />
        ) : null} */}
      <span className="label">{label}</span>
    </button>);
};
