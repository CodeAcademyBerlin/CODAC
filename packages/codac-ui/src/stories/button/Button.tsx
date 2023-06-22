import React from "react";
import "./button.css";
import Image from "next/image";
import sendIconWhite from "../assets/send-icon-white.svg";
import sendIconBlack from "../assets/send-icon-black.svg";
import joinIconWhite from "../assets/join-icon-white.svg";
import joinIconBlack from "../assets/join-icon-black.svg";

interface ButtonProps {
  /**
   * Button Label (Icon automatically added)
   */
  label: string;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Is it for darkmode?
   */
  darkmode?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  darkmode = false,
  label,
  ...props
}: ButtonProps) => {
  const isDarkmode = darkmode ? "darkmode" : "lightmode";
  const isPrimary = primary ? "primary" : "secondary";
  const sendIcon = darkmode ? sendIconBlack : sendIconWhite;
  const joinIcon = darkmode ? joinIconBlack : joinIconWhite;

  return (
    <button
      type="button"
      className={["storybook-button", isDarkmode, isPrimary].join(" ")}
      {...props}
    >
      {label === "Send" ? (
        <Image className="icon" src={sendIcon} alt="" width={30} height={30} />
      ) : label === "Join" ? (
        <Image className="icon" src={joinIcon} alt="" width={30} height={30} />
      ) : null}
      <span className="label">{label}</span>
    </button>
  );
};
