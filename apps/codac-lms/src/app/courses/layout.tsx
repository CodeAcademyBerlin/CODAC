import { LMSLayout } from "codac-ui";

import LayoutHeader from "#/components/layout-header";
import LayoutSideNav from "#/components/layout-side-nav";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-[url('/grid.svg')]">
      <LMSLayout sideNav={<LayoutSideNav />} topNav={<LayoutHeader />}>
        {children}
      </LMSLayout>
    </div>
  );
}
