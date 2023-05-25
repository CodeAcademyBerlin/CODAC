import { Boundary, TabGroup } from "codac-ui";
import React from "react";

import { getCourses } from "../api/courses/getCourses";

export const metadata = {
  title: "Courses",
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const courses = await getCourses();

  return (
    <div className="space-y-9">
      <Boundary labels={["courses"]} color="blue">
        <div className="flex justify-between">
          <TabGroup
            path={`/courses`}
            items={[
              ...courses.map((x) => ({
                text: x.attributes.name ?? "",
                slug: x.attributes.name ?? "",
              })),
            ]}
          />

          <div className="self-start">{/* <ClickCounter /> */}</div>
        </div>
      </Boundary>
      <div>{children}</div>
    </div>
  );
}
