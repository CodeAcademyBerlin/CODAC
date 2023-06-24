import type { CourseEntity, UsersPermissionsMe } from "codac-graphql-types";
import { notFound } from "next/navigation";
import { getServerSession, Session } from "next-auth";
import { getSession } from "next-auth/react";

import { SearchResults } from "#/types/user";
import { authOptions } from "#/utils/auth";
import { fetchAPI, fetchStrapi, fetchStrapiSuspense } from "#/utils/fetch-api";

// export async function getUser(jwt: string) {
//   const options = { headers: { Authorization: `Bearer ${jwt}` } };

//   const user = await fetchAPI<UsersPermissionsMe>("/users/me", { populate: "*" }, options);
//   if (!user) {
//     // Render the closest `not-found.js` Error Boundary
//     notFound();
//   }

//   return null;
// }

export async function lmsSearch(query: string, token: string) {
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const data = await fetchStrapi<SearchResults>({
    path: "/fuzzy-search/search/",
    urlParamsObject: {
      query: query,
    },
    options,
    dataResponse: false,
  });
  console.log("data", data);
  if (!data) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return data;
}
