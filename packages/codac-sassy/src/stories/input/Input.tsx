import React from "react";
import "./input.css";

interface InputProps {
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
export const Input = ({ darkmode = false, ...props }: InputProps) => {
  const isDarkmode = darkmode ? "darkmode" : "lightmode";
  return <textarea className={["storybook-input", isDarkmode].join(" ")} {...props}></textarea>;
};
