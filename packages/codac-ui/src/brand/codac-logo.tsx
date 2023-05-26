import type { FunctionComponent, SVGAttributes } from "react";

type LogoProps = SVGAttributes<SVGElement>;

export const CodacLogo: FunctionComponent<LogoProps> = (props) => {
  const { ...rest } = props;
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="30.9 40 429.6 424"
      {...rest}
    >
      <path d="M 166.6 464 L 242 222 L 182 42 L 30.9 464 Z M 335.3 464 L 193 40 H 308 L 460.5 464 Z" />
    </svg>
  );
};
export function CodacLogoText() {
  return (
    <a href="https://codeacademyberlin.com" target="_blank" title="CODAC">
      <div className="hover:text-secondary flex align-middle text-gray-100">
        <div className="w-0.5 flex-auto">
          <CodacLogo />
        </div>
        <p className="flex-auto font-['CODAC']"> Code Academy Berlin</p>
      </div>
    </a>
  );
}
