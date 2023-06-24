import { SearchIcon } from "@heroicons/react/solid";
import { clsx } from "clsx";
import { Course, CourseEntity, Page, Project } from "codac-graphql-types";
import Link from "next/link";
import React, { RefObject } from "react";

import { Boundary } from "./boundary";

// type Props = {};
interface Props {
  searchResults: {
    courses: Course[];
    projects: Project[];
    pages: Page[];
  };
  passRef: RefObject<HTMLDivElement>;
}
export const SearchResult = ({ searchResults, passRef }: Props) => {
  console.log("searchResults", searchResults);
  return (
    <>
      <div
        ref={passRef}
        // onClick={toggleMenu}
        className="relative flex shrink-0 cursor-pointer gap-x-3"
      >
        <div
          className={clsx(
            "absolute right-0 top-2 z-20 mt-0 w-full origin-top-right rounded-sm bg-zinc-700 transition-all duration-100",
            {
              "block w-44": searchResults,
              "hidden w-0": !searchResults,
            }
          )}
        >
          {searchResults && (
            <div
              className="rounded-xl
             border-zinc-900 p-8 text-white"
            >
              {searchResults.courses.length > 0 && (
                <div className="py-3">
                  <Boundary size="xsmall" labels={["courses"]} color={"blue"}>
                    {searchResults.courses.map((course) => (
                      <Link key={course.name} href={`/courses/${course.slug}`}>
                        <div className="flex items-center">{course.name}</div>
                      </Link>
                    ))}
                  </Boundary>
                </div>
              )}
              {searchResults.projects.length > 0 && (
                <div className="py-3">
                  <Boundary size="xsmall" labels={["projects"]} color={"violet"}>
                    {searchResults.projects.map((project) => (
                      <Link key={project.name} href={`/courses/projects/${project.slug}`}>
                        <div className="flex items-center">{project.name}</div>
                      </Link>
                    ))}
                  </Boundary>
                </div>
              )}
              {searchResults.pages.length > 0 && (
                <div className="py-3">
                  <Boundary size="xsmall" labels={["pages"]} color={"orange"}>
                    {searchResults.pages.map((page) => (
                      <Link key={page.title} href={`/courses/${page.slug}`}>
                        <div className="flex items-center">{page.title}</div>
                      </Link>
                    ))}
                  </Boundary>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
