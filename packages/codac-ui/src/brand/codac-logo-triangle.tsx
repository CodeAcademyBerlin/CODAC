import type { FunctionComponent, SVGAttributes } from "react";

import { BrandLogo } from ".";
import { yellowtailFontStyle } from "./codac-font";

type LogoProps = SVGAttributes<SVGElement>;

export const CodacLogoTriangle: FunctionComponent<LogoProps> = (props) => {
  const { ...rest } = props;
  return (
    <>
      <div className="absolute left-0 right-0 text-center">
        <BrandLogo>CODAC</BrandLogo>
        <h2
          className={`-rotate-12 text-center ${yellowtailFontStyle} text-secondary text-6xl lg:text-8xl`}
        >
          LMS
        </h2>
      </div>

      <svg
        height="320"
        width="400"
        className="stroke-primary animate-[dashTriangle_10s_linear_forwards] stroke-[3px]"
        {...rest}
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "rgb(50,50,50)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "black", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <filter height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <polygon points="0,0 400,0 200,300" />
      </svg>
      <div className="grid"></div>
    </>
  );
};
