import { Boundary, LMSLayout } from "codac-ui";
import React from "react";

import LayoutHeader from "#/components/layout-header";
import LayoutSideNav from "#/components/layout-side-nav";

export const metadata = {
  title: "Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-[url('/grid.svg')]">
      <LMSLayout topNav={<LayoutHeader />}>
        <div className="space-y-10 ">{children}</div>
      </LMSLayout>
    </div>
  );
}
