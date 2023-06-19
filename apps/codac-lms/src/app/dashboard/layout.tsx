import { Boundary, Header, LMSLayout } from "codac-ui";
import { LMSNav } from "codac-ui/layouts/lms-nav";
import React from "react";

export const metadata = {
  title: "Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LMSLayout
    // topNav={<Header />}
    // sideNav={<LMSNav />}
    >
      <div className="space-y-10">{children}</div>
    </LMSLayout>
  );
}
