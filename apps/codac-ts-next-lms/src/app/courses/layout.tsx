import { Boundary, DashboardLayout, GlobalNav, SignIn, TabGroup } from "codac-ui";
import React from "react";

import { navigation } from "#/constants/navigation";

import { getCourses } from "./[courseSlug]/getCourses";

export const metadata = {
  title: "Courses",
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const courses = await getCourses();
  return (
    <DashboardLayout
      navigation={
        <GlobalNav navigation={navigation} header="CODAC LMS" authentication={<SignIn />} />
      }
    >
      <div className="space-y-9">
        <Boundary labels={["courses"]} color="blue">
          <div className="flex justify-between">
            <TabGroup
              path={`/courses`}
              items={[
                ...courses.map((x) => ({
                  text: x.attributes.name,
                  slug: x.attributes.slug ?? "",
                })),
              ]}
            />

            <div className="self-start">{/* <ClickCounter /> */}</div>
          </div>
        </Boundary>
        <div>{children}</div>
      </div>
    </DashboardLayout>
  );
}
