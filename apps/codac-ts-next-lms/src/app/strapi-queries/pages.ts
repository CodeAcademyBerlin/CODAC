/* eslint-disable turbo/no-undeclared-env-vars */
// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import "server-only";

import type { ProjectEntity } from "codac-server-graphql";
import { notFound } from "next/navigation";

import type { PageEntity } from "#/types/page";
import { fetchAPI } from "#/utils/fetch-api";

export async function getProjectBySlug({ slug }: { slug: string }) {
  const token = process.env.CODAC_SSG_TOKEN ?? "";
  const path = `/projects`;
  const urlParamsObject = {
    filters: { slug },
    populate: "sprints.pages",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const projects = await fetchAPI<ProjectEntity[]>(path, urlParamsObject, options);
  const project = projects[0];
  console.log("project", project);

  if (!projects) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }
  // const { sprints } = project.attributes.sprints;

  // const spikes = project?.attributes?.spikes ?? [];

  // if (!sprints.length) {
  //   // Render the closest `not-found.js` Error Boundary
  //   notFound();
  // }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return {
    project,
    // spikes: spikes.data
  };
}
export async function getPageBySlug({ slug }: { slug: string }) {
  const token = process.env.CODAC_SSG_TOKEN ?? "";
  const path = `/pages`;
  const urlParamsObject = {
    filters: { slug },
    populate: "*",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const page = await fetchAPI<PageEntity[]>(path, urlParamsObject, options);
  if (!page.length) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return page[0];
}
