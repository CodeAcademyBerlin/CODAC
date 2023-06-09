"use client";
import React from "react";

// import styled, { keyframes } from "styled-components";
import { codacFontClass } from "./codac-font";

interface Props {
  children: React.ReactNode;
}

// import localFont from "@next/font/local";
// import { FC, type ReactNode } from "react";

// const codacFont = localFont({ src: "../assets/codac-font.woff2" });

// const neonLight = keyframes`
//        0% {
//     text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
//   1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
//     1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
//       1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
//         1px 30px 300px #38bcc1;
//           }
//        90% {
//            text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
//   1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
//     1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
//       1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
//         1px 30px 400px #38bcc1;
//         }
//     95% {
// text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
//         1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
//         1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
//         1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2);
//         }
//   100%{
//     text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,
//     1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191,
//     1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
//     1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
//     1px 30px 500px #38bcc1;
//       }
//  `;
// export const NeonAnim = styled("div")`
//   animation: ${neonLight} 2s linear infinite alternate-reverse;
// `;

export function BrandLogo({ children }: Props) {
  return (
    <div
      className={`flex-auto ${codacFontClass} text-primary animate-[neonLight_2s_infinite_alternate-reverse] text-6xl lg:text-9xl`}
    >
      {children}
    </div>
  );
}
