import React, { useState } from "react";
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

  return (
    <textarea
      className={isDarkmode}
      placeholder="Write something..."
      // onFocus={() => {
      //   setTyping(true);
      // }}
      // onBlur={() => {
      //   setTyping(false);
      // }}
      // value={msg}
      // onChange={(e) => {
      //   setMsg(e.target.value);
      // }}
      // onKeyDown={(e) => {
      //   if (e.key === "Enter") {
      //     sendMessage();
      //   }
      // }}
    />
  );
};
