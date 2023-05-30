import { Boundary, DashboardLayout, GlobalNav, SignIn, TabGroup } from "codac-ui";
// import { getServerSession } from "next-auth/next";
import React from "react";

import { getCourses } from "#/app/strapi-queries/courses";
export default async function Page() {
  const courses = await getCourses();
  return (
    <div className="">
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
        </div>
      </Boundary>
    </div>
  );
}
