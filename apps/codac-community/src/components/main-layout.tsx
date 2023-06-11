import { DashboardLayout, GlobalNav } from "codac-ui";
import React, { ReactNode } from "react";
import Auth from "./auth";
import { navigation } from "#/constants/navigation";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardLayout
      navigation={
        <GlobalNav
          appDir={false}
          navigation={navigation}
          authentication={<Auth />}
          header="CODAC COMMUNITY"
        />
      }
    >
      {children};
    </DashboardLayout>
  );
}

export default MainLayout;
