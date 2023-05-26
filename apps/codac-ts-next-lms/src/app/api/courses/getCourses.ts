/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable turbo/no-undeclared-env-vars */
// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import "server-only";

import type { CourseEntityResponseCollection } from "codac-server-graphql";
import { notFound } from "next/navigation";

import { fetchAPI } from "../fetch-api";

export async function getCourses() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN ?? "";
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const courses = await fetchAPI<CourseEntityResponseCollection>(
    "/courses",
    { populate: "*" },
    options
  );

  if (courses.data?.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return courses.data;
}
export async function getCourseByName({ name }: { name: string }) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN ?? "";
  const path = `/courses`;
  const urlParamsObject = {
    filters: { name },
    populate: "*",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const courses = await fetchAPI<CourseEntityResponseCollection>(path, urlParamsObject, options);

  if (!courses.data?.length) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return courses.data[0];
}
