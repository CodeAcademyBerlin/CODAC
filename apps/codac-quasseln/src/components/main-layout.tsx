import { DashboardLayout, GlobalNav } from "codac-ui";
import React, { type ReactNode } from "react";

import { navigation } from "#/constants/navigation";

import Auth from "./auth";

function MainLayout({ children }: { children: ReactNode }) {
  return (


    <DashboardLayout
      navigation={
        <GlobalNav
          appDir={false}
          navigation={navigation}
          authentication={<Auth />}
          header="CODAC QUASSELN"
        />
      }
    >
      {children};
    </DashboardLayout>
  );
}

export default MainLayout;
