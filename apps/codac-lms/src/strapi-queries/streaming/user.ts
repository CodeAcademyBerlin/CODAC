import type { CourseEntity, UsersPermissionsMe } from "codac-graphql-types";
import { notFound } from "next/navigation";
import { getServerSession, Session } from "next-auth";
import { getSession } from "next-auth/react";

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

export async function getUserDataStreaming() {
  const session = await getServerSession(authOptions);
  if (!session) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }
  const token = session?.user?.accessToken ?? "";
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const data = await fetchStrapiSuspense({
    path: "/users/me",
    urlParamsObject: {
      populate: {
        courses: {
          populate: ["image"],
        },
        student: {
          populate: ["cohort"],
        },
        avatar: "*",
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
