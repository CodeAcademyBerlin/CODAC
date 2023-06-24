import type { CourseEntity, UsersPermissionsMe } from "codac-graphql-types";
import { notFound } from "next/navigation";
import { Session } from "next-auth";

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

export async function getUserData(token: string) {
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const data = await fetchStrapi({
    path: "/users/me",
    dataResponse: false,
    urlParamsObject: {
      populate: {
        courses: {
          populate: ["image"],
        },
      },
    },
    options,
  });
  console.log("data", data);
  if (!data) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return data;
}
