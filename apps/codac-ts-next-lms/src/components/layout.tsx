import * as React from "react";
import { MainContainer, RainbowCursor } from "toxic-ui";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RainbowCursor />
      <Header title="CODAC LMS" />
      {children}
    </>
  );
}
