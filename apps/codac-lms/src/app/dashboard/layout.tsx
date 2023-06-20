import { Boundary, LMSLayout } from "codac-ui";
import { LMSNav } from "codac-ui/layouts/lms-nav";
import React from "react";

import LayoutHeader from "#/components/layout-header";

export const metadata = {
  title: "Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LMSLayout
      topNav={<LayoutHeader />}
      // sideNav={<LMSNav />}
    >
      <div className="space-y-10">{children}</div>
    </LMSLayout>
  );
}
