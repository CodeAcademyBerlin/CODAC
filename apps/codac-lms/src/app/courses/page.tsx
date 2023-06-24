import { Boundary, Card } from "codac-ui";
// import { getServerSession } from "next-auth/next";
import React from "react";

import { getCourses } from "#/strapi-queries/server/courses";
export default async function Page() {
  const courses = await getCourses();
  return (
    <div className="">
      <Boundary labels={["courses"]} color="blue">
        <div className="flex justify-around">
          {courses.map((course) => (
            <Card
              key={course.id}
              title={course.attributes.name}
              image={course.attributes.image?.data.attributes.url}
              href={`/courses/${course.attributes.slug ?? ""}`}
              tag={`${course.attributes.months ?? ""} months`}
            />
          ))}
        </div>
      </Boundary>
    </div>
  );
}
