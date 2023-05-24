import type { ComponentProps, ReactElement } from "react";

export function CodacLogoIcon(props: ComponentProps<"svg">): ReactElement {
  return (
    <svg
      // width="10"
      // height="30"
      className="fill-primary group-hover:fill-primary dark:fill-gray-400 dark:group-hover:fill-gray-50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="30.9 40 429.6 424"
      {...props}
    >
      <title>CODAC UI</title>
      <path d="M 166.6 464 L 242 222 L 182 42 L 30.9 464 Z M 335.3 464 L 193 40 H 308 L 460.5 464 Z" />
    </svg>
  );
}
