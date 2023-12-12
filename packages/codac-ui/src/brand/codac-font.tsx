// "use client";
import { Inter, Orbitron, Yellowtail } from "next/font/google";
import localFont from "next/font/local";

const yellowtail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
});
// Font files can be colocated inside of `app`
export const codacFont = localFont({
  src: "../assets/codac-font.woff2",
  display: "swap",
  variable: "--codac-font",
});

export const codacFontClass = codacFont.className;
export const yellowtailFontStyle = yellowtail.className;
