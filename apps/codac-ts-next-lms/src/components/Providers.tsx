"use client";

import { ThemeProvider } from "codac-ui";
import { SessionProvider } from "next-auth/react";
import React, { type ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
