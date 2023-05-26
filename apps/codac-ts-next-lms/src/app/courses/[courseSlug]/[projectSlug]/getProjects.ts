/* eslint-disable turbo/no-undeclared-env-vars */
// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import "server-only";

import type { ProjectEntity, ProjectEntityResponseCollection } from "codac-server-graphql";
import { notFound } from "next/navigation";

import { getCourseByName } from "#/app/courses/[courseSlug]/getCourses";

export async function getProjectsByCoursesName({ name }: { name: string }) {
  const course = await getCourseByName({ name });

  const { projects } = course.attributes;

  if (!projects || projects.data.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return projects.data;
}
export async function getProjectByName({ name }: { name: string }) {
  const token = process.env.CODAC_SSG_TOKEN ?? "";
  const path = `/projects`;
  const urlParamsObject = {
    filters: { name },
    populate: "*",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const projects = await fetchAPI<ProjectEntity[]>(path, urlParamsObject, options);
  if (!projects.length) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return projects[0];
}