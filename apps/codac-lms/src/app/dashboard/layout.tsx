import { Boundary, LMSLayout } from "codac-ui";
import React from "react";

import LayoutHeader from "#/components/layout-header";
import LayoutSideNav from "#/components/layout-side-nav";

export const metadata = {
  title: "Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LMSLayout topNav={<LayoutHeader />} sideNav={<LayoutSideNav />}>
      <div className="space-y-10 ">{children}</div>
    </LMSLayout>
  );
}
