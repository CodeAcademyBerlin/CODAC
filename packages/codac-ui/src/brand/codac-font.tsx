"use client";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
export const codacFont = localFont({
  src: "../assets/codac-font.woff2",
  display: "swap",
  variable: "--codac-font",
});

export const codacFontClass = codacFont.className;
