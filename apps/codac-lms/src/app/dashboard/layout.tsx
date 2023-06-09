import { Boundary, Header, LMSLayout } from "codac-ui";
import React from "react";

export const metadata = {
  title: "Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LMSLayout navigation={<Header />}>
      <div className="space-y-10">{children}</div>
    </LMSLayout>
  );
}
