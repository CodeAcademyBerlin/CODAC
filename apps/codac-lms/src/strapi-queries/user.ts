import type { CourseEntity, UsersPermissionsMe } from "codac-graphql-types";
import { notFound } from "next/navigation";

import { fetchAPI } from "#/utils/fetch-api";

// export async function getUser(jwt: string) {
//   const options = { headers: { Authorization: `Bearer ${jwt}` } };

//   const user = await fetchAPI<UsersPermissionsMe>("/users/me", { populate: "*" }, options);
//   if (!user) {
//     // Render the closest `not-found.js` Error Boundary
//     notFound();
//   }

//   return null;
// }

export async function getUserLMSTree() {
  const token = process.env.CODAC_SSG_TOKEN ?? "";
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const courses = await fetchAPI<CourseEntity[]>(
    "/courses",
    {
      fields: ["name", "slug"],
      populate: {
        fields: ["name", "slug"],
        projects: {
          fields: ["name", "slug"],
          populate: {
            sprints: {
              populate: "*",
            },
          },
        },
      },
      // populate: ["projects.sprints.pages", "projects.sprints.spikes"],
      // fields: ["name", "slug"],
    },
    options
  );
  if (courses?.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return courses;
}
