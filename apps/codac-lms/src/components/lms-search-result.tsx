import { clsx } from "clsx";
import { Course, CourseEntity, Page, Project } from "codac-graphql-types";
import { Boundary } from "codac-ui";
import Link from "next/link";
import React, { RefObject } from "react";

interface Props {
  searchResults: {
    courses: Course[];
    projects: Project[];
    pages: Page[];
  } | null;
}
export const LMSSearchResult = ({ searchResults }: Props) => {
  console.log("searchResults", searchResults);
  const { courses, projects, pages } = searchResults ?? { courses: [], projects: [], pages: [] };
  return (
    <>
      <div className="py-3">
        <Boundary size="xsmall" labels={["courses"]} color={"blue"}>
          {courses.map((course) => (
            <Link key={course.name} href={`/courses/${course.slug}`}>
              <div className="flex items-center">{course.name}</div>
            </Link>
          ))}
        </Boundary>
      </div>

      <div className="py-3">
        <Boundary size="xsmall" labels={["projects"]} color={"violet"}>
          {projects.map((project) => (
            <Link key={project.name} href={`/courses/projects/${project.slug}`}>
              <div className="flex items-center">{project.name}</div>
            </Link>
          ))}
        </Boundary>
      </div>

      <div className="py-3">
        <Boundary size="xsmall" labels={["pages"]} color={"orange"}>
          {pages.map((page) => (
            <Link key={page.title} href={`/courses/${page.slug}`}>
              <div className="flex items-center">{page.title}</div>
            </Link>
          ))}
        </Boundary>
      </div>
    </>
  );
};
