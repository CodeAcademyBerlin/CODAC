import { ProjectEntity } from "codac-graphql-types";
import Link from "next/link";
import React from "react";

import { Boundary } from "../../components";
import { Accordion } from "../../components/accordion";
import { ArrowRightIcon, CloseIcon } from "../../icons";
interface Props {
  projects: { data: ProjectEntity[] };
  segments: string[];
}
export function LMSTreeProjects({ projects, segments }: Props) {
  console.log("segments", segments);

  return (
    <>
      {projects.data.map((project) => {
        [...segments, project.attributes.slug ?? ""];
        const { sprints } = project.attributes ?? [];
        return (
          <div key={project.id} className="flex flex-col gap-y-2">
            {(project.attributes.slug === segments[2] || !segments[2]) && (
              <>
                <div className="my-2 flex items-center">
                  <div className="flex-1">
                    <Link
                      className="text-codac-violet"
                      href={`/courses/${segments[1]}/${project.attributes.slug}`}
                    >
                      {project.attributes.name}
                    </Link>
                  </div>
                  {segments[2] && (
                    <Link href={`/courses/${segments[1]}`}>
                      <CloseIcon className="fill-codac-violet h-3 w-3" />
                    </Link>
                  )}
                </div>

                {segments[2] &&
                  sprints &&
                  sprints.map((sprint) => {
                    if (sprint) {
                      const { lessons, spikes } = sprint ?? [];
                      // const pages = [...lessons.data, ...spikes.data]
                      return (
                        <Accordion
                          key={sprint.id}
                          // isSegment={ segments[3] === sprint.}
                          title={sprint.name ?? ""}
                        >
                          <div className="flex flex-col gap-y-5">
                            <Boundary size="xsmall" labels={["lessons"]} color={"orange"}>
                              {lessons &&
                                lessons.data.map((lesson) => (
                                  <div key={lesson.id} className="my-2 flex items-center">
                                    <div className="flex-1">
                                      <Link
                                        className="text-codac-orange"
                                        href={`/courses/${segments[1]}/${project.attributes.slug}/${lesson.attributes.slug}`}
                                      >
                                        {lesson.attributes.title}
                                      </Link>
                                    </div>
                                    {!segments ||
                                      (segments[3] === lesson.attributes.slug && (
                                        <ArrowRightIcon className="fill-codac-pink h-3 w-3 animate-[highlight_1s_ease-in-out_1]" />
                                      ))}
                                  </div>
                                ))}
                            </Boundary>

                            <Boundary size="xsmall" labels={["spikes"]} color={"cyan"}>
                              {spikes &&
                                spikes.data.map((spike) => {
                                  return (
                                    <div key={spike.id} className="my-2 flex items-center">
                                      <div className="flex-1">
                                        <Link
                                          className="text-codac-cyan"
                                          href={`/courses/${segments[1]}/${project.attributes.slug}/${spike.attributes.slug}`}
                                        >
                                          {spike.attributes.title}
                                        </Link>
                                      </div>
                                      {segments[3] === spike.attributes.slug && (
                                        <ArrowRightIcon className="fill-codac-pink h-3 w-3 animate-[highlight_1s_ease-in-out_1]" />
                                      )}
                                    </div>
                                  );
                                })}
                            </Boundary>
                          </div>
                        </Accordion>
                      );
                    }
                  })}
              </>
            )}
          </div>
        );
      })}
    </>
  );
}
