"use client";
import React from "react";

// import styled, { keyframes } from "styled-components";
import { codacFontClass } from "./codac-font";

interface Props {
  children: React.ReactNode;
}

export function BrandLogo({ children }: Props) {
  return (
    <div
      className={`flex-auto ${codacFontClass} text-primary animate-[neonLight_2s_infinite_alternate-reverse] text-6xl lg:text-9xl`}
    >
      {children}
    </div>
  );
}
