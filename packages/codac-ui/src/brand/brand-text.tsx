"use client";
import React from "react";

import { codacFontClass } from "./codac-font";

interface Props {
  children: React.ReactNode;
}

export function BrandText({ children }: Props) {
  return <div className={`flex-auto ${codacFontClass} text-primary`}>{children}</div>;
}
