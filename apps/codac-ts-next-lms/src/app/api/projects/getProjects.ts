/* eslint-disable turbo/no-undeclared-env-vars */
// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import "server-only";

import type {
  CourseEntity,
  CourseEntityResponse,
  CourseEntityResponseCollection,
  ProjectEntityResponseCollection,
} from "codac-server-graphql";
import { notFound } from "next/navigation";

import { getCourseByName } from "../courses/getCourses";
import { fetchAPI } from "../fetch-api";
export async function getProjectsByCoursesName({ name }: { name: string }) {
  const course = await getCourseByName({ name });

  console.log("course", course);

  const { projects } = course.attributes;

  if (!projects || projects.data.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return projects.data;
}
export async function getProjectByName({ name }: { name: string }) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN ?? "";
  const path = `/projects`;
  const urlParamsObject = {
    filters: { name },
    populate: "*",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const projects = await fetchAPI<ProjectEntityResponseCollection>(path, urlParamsObject, options);

  if (!projects.data.length) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return projects.data[0];
}
