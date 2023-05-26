/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable turbo/no-undeclared-env-vars */
// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import "server-only";

import type { CourseEntity, CourseEntityResponseCollection } from "codac-server-graphql";
import { notFound } from "next/navigation";

import { fetchAPI } from "../fetch-api";

export async function getCourses() {
  const token = process.env.CODAC_SSG_TOKEN ?? "";
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const courses = await fetchAPI<CourseEntity[]>("/courses", { populate: "*" }, options);
  console.log("courses", courses);
  if (courses?.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return courses;
}
export async function getCourseByName({ name }: { name: string }) {
  const token = process.env.CODAC_SSG_TOKEN ?? "";
  console.log("token", token);
  const path = `/courses`;
  const urlParamsObject = {
    filters: { name },
    populate: "*",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const courses = await fetchAPI<CourseEntity[]>(path, urlParamsObject, options);
  console.log("courses", courses);
  if (!courses?.length) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return courses[0];
}
