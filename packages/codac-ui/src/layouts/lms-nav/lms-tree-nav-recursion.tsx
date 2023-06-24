// WORK IN PROGRESS - NOT IN USE
import { CourseEntity } from "codac-graphql-types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { Boundary } from "../components";
import { CloseIcon } from "../icons";
interface TreeShape {
  label: string;
  color: "blue" | "violet" | "orange";
  colorClass: string;
  children?: string;
  type: "default" | "accordion";
}
const treeShape: TreeShape[] = [
  {
    label: "course",
    color: "blue",
    colorClass: "hover:text-codac-blue",
    children: "projects",

    type: "default",
  },
  {
    label: "project",
    color: "violet",
    colorClass: "hover:text-codac-violet",
    children: "sprints",
    type: "default",
  },
  {
    label: "sprint",
    color: "violet",
    colorClass: "hover:text-codac-violet",
    children: "pages",
    type: "accordion",
  },
  {
    label: "page",
    color: "orange",
    colorClass: "hover:text-codac-orange",
    type: "default",
  },
];
interface LMSTreeNavProps {
  lmsTree: any;
}
interface LMSTreeRecursionProps {
  lmsBranch: any[];
  segment: number;
}
export function LMSTreeNav({ lmsTree }: { lmsTree: CourseEntity[] }) {
  const pathname = usePathname();
  const segments = pathname.split("/").slice(1) ?? [];
  console.log("lemTree", lmsTree);
  console.log("lemTree", lmsTree);
  console.log("lemTree", segments);
  const LMSTreeRecursion = ({ lmsBranch, segment }: LMSTreeRecursionProps) => {
    const { type, color, label } = treeShape[segment];
    const children = treeShape[type === "accordion" ? segment + 1 : segment].children;
    return (
      <>
        <Boundary size="xsmall" labels={[label]} color={color}>
          {lmsBranch.map((branch) => {
            console.log("branch", branch);
            const { slug } = branch.attributes ?? "";
            const name = branch.attributes?.name ?? branch.attributes?.title;
            return (
              <div key={branch.id} className="flex flex-col gap-y-3">
                {type === "default" &&
                  (slug === segments[segment + 1] || !segments[segment + 1]) && (
                    <div className="my-2 flex items-center">
                      <div className="flex-1">
                        <Link
                          className={`text-codac-${color}`}
                          href={`/${[...segments, slug].join("/")}`}
                        >
                          {name}
                        </Link>
                      </div>
                      {segments[segment + 1] && (
                        <Link href={`/${segments.join("/")}`}>
                          <CloseIcon className={`fill-codac-${color} h-3 w-3`} />
                        </Link>
                      )}
                    </div>
                  )}
                {children && segment < segments.length - 1 && (
                  <>
                    {/* {type === "accordion" ? (
                      <Accordion title={branch.title}>
                        {LMSTreeRecursion({
                          lmsBranch:
                            branch.attributes[children]?.data ?? branch.attributes[children],
                          segment: segment + 2,
                        })}
                      </Accordion>
                    ) : ( */}
                    {LMSTreeRecursion({
                      lmsBranch: branch.attributes[children]?.data ?? branch.attributes[children],
                      segment: segment + 1,
                    })}
                  </>
                )}
              </div>
            );
          })}
        </Boundary>
      </>
    );
  };
  return (
    <div className="mt-7 flex flex-col gap-y-5 ">
      {lmsTree && <LMSTreeRecursion lmsBranch={lmsTree} segment={0} />}
    </div>
  );
  {
    /*return (
    <div className="mt-7 flex flex-col gap-y-5 ">
      {lmsTree &&  <LMSTreeRecursion lmsBranch={lmsTree}, segment={ 0} />}
    </div>
     {lmsTree && (
        <Boundary size="xsmall" labels={["course"]} color={"blue"}>
          {lmsTree.map((course: any) => {
            return (
              <div key={course.id} className="flex flex-col gap-y-3">
                {(course.attributes.slug === segments[1] || !segments[1]) && (
                  <>
                    <div className="my-2 flex items-center">
                      <div className="flex-1">
                        <Link
                          className="text-codac-blue"
                          href={`/courses/${course.attributes.slug}`}
                        >
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
                          {course.attributes.projects.data.map((project: any) => {
                            return (
                              <div key={project.id} className="flex flex-col gap-y-2">
                                {(project.attributes.slug === segments[2] || !segments[2]) && (
                                  <>
                                    <div className="my-2 flex items-center">
                                      <div className="flex-1">
                                        <Link
                                          key={project.name}
                                          className="text-codac-violet"
                                          href={`/courses/${course.attributes.slug}/${project.attributes.slug}`}
                                        >
                                          {project.attributes.name}
                                        </Link>
                                      </div>
                                      {segments[2] && (
                                        <Link href={`/courses/${course.attributes.slug}`}>
                                          <CloseIcon className="fill-codac-violet h-3 w-3" />
                                        </Link>
                                      )}
                                    </div>

                                    {segments[2] &&
                                      project.attributes.sprints.map((sprint: any) => {
                                        return (
                                          <Accordion key={sprint.id} title={sprint.name}>
                                            <div className="flex flex-col gap-y-3">
                                              <Boundary
                                                size="xsmall"
                                                labels={["pages"]}
                                                color={"orange"}
                                              >
                                                {sprint.pages.data.map((page) => (
                                                  <div
                                                    key={page.id}
                                                    className="my-2 flex items-center"
                                                  >
                                                    <div className="flex-1">
                                                      <Link
                                                        className="text-codac-orange"
                                                        href={`/courses/${course.attributes.slug}/${project.attributes.slug}/${page.attributes.slug}`}
                                                      >
                                                        {page.attributes.title}
                                                      </Link>
                                                    </div>
                                                    {segments[3] === page.attributes.slug && (
                                                      <ArrowRightIcon className="fill-codac-pink h-3 w-3 animate-[highlight_1s_ease-in-out_1]" />
                                                    )}
                                                  </div>
                                                ))}
                                              </Boundary>

                                              <Boundary
                                                size="xsmall"
                                                labels={["spikes"]}
                                                color={"cyan"}
                                              >
                                                {sprint.spikes.data.map((spike) => (
                                                  <div
                                                    key={spike.id}
                                                    className="my-2 flex items-center"
                                                  >
                                                    <div className="flex-1">
                                                      {spike.attributes.content && (
                                                        <Link
                                                          className="text-codac-cyan"
                                                          href={`/courses/${course.attributes.slug}/${project.attributes.slug}/${spike.attributes.content.data.attributes.slug}`}
                                                        >
                                                          {spike.attributes.title}
                                                        </Link>
                                                      )}
                                                    </div>
                                                    {segments[3] ===
                                                      spike.attributes.content.data.attributes
                                                        .slug && (
                                                      <ArrowRightIcon className="fill-codac-pink h-3 w-3 animate-[highlight_1s_ease-in-out_1]" />
                                                    )}
                                                  </div>
                                                ))}
                                              </Boundary>
                                            </div>
                                          </Accordion>
                                        );
                                      })}
                                  </>
                                )}
                              </div>
                            );
                          })}
                        </Boundary>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </Boundary>
      )} 
    </div>
  );*/
  }
}
