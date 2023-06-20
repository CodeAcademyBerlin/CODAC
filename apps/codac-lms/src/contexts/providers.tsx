"use client";

import { ThemeProvider } from "codac-ui";
import { SessionProvider } from "next-auth/react";
import React, { type ReactNode } from "react";

import { AuthProvider } from "#/contexts/useAuth";
interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </SessionProvider>
  );
};

export default Providers;
