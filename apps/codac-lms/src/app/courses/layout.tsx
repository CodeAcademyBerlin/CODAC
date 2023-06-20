// "use client";
import { BlankLayout, GlobalNav, Header, LMSLayout } from "codac-ui";

import LayoutHeader from "#/components/layout-header";
import LayoutSideNav from "#/components/layout-side-nav";
import { navigation } from "#/constants/navigation";
// import { getLMSTree } from "#/strapi-queries/courses";

export default async function Layout({ children }: { children: React.ReactNode }) {
  // const lmsTree = await getLMSTree();

  return (
    <LMSLayout topNav={<LayoutHeader />} sideNav={<LayoutSideNav />}>
      <div className="space-y-9">
        <div>{children}</div>
      </div>
    </LMSLayout>
  );
}
