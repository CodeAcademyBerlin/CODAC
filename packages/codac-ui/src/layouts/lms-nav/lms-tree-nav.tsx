import { CourseEntity } from "codac-graphql-types";
import Link from "next/link";
import React from "react";

import { Boundary } from "../../components";
import { CloseIcon } from "../../icons";
import { LMSTreeProjects } from "./lms-tree-projects";
interface Props {
  courses: CourseEntity[];
  segments: string[];
}
export function LMSTreeNav({ courses, segments }: Props) {
  console.log("segments", segments);
  console.log("courses", courses);

  return (
    <div className="mt-7 flex flex-col gap-y-5">
      <Boundary size="xsmall" labels={["course"]} color={"blue"}>
        {courses.map((course) => {
          const { projects } = course.attributes ?? [];
          return (
            <div key={course.id} className="flex flex-col gap-y-3">
              {(course.attributes.slug === segments[1] || !segments[1]) && (
                <>
                  <div className="my-2 flex items-center">
                    <div className="flex-1">
                      <Link className="text-codac-blue" href={`/courses/${course.attributes.slug}`}>
                        {course.attributes.name}
                      </Link>
                    </div>
                    {segments[1] && (
                      <Link href={`/courses`}>
                        <CloseIcon className="fill-codac-blue h-3 w-3" />
                      </Link>
                    )}
                  </div>
                  <div>
                    {segments[1] && (
                      <Boundary size="xsmall" labels={["projects"]} color={"violet"}>
                        {projects && <LMSTreeProjects projects={projects} segments={segments} />}
                      </Boundary>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </Boundary>
    </div>
  );
}
