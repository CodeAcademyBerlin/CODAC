/* eslint-disable turbo/no-undeclared-env-vars */
// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import "server-only";

import type { ProjectEntity, ProjectEntityResponseCollection } from "codac-server-graphql";
import { notFound } from "next/navigation";

import { fetchAPI } from "../fetch-api";

export async function getPagesByProjectName({ name }: { name: string }) {
  const token = process.env.CODAC_SSG_TOKEN ?? "";
  const path = `/projects`;
  const urlParamsObject = {
    filters: { name },
    populate: "*",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const projects = await fetchAPI<ProjectEntity[]>(path, urlParamsObject, options);
  const project = projects[0];
  if (!project.attributes.pages) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }
  const pages = project.attributes.pages;
  const spikes = project.attributes.spikes;

  if (!pages.data.length) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return { pages: pages.data, spikes: spikes?.data ?? [] };
}
export async function getPageBySlug({ name }: { name: string }) {
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
