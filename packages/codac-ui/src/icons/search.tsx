import type { ComponentProps, ReactElement } from "react";

export function SearchIcon({
  pathClassName,
  ...props
}: ComponentProps<"svg"> & { pathClassName?: string }): ReactElement {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        className={pathClassName}
      />
    </svg>
  );
}
