import type { UsersPermissionsMe } from "codac-graphql-types";
import { notFound } from "next/navigation";

import { fetchAPI } from "#/utils/fetch-api";

export async function getUser(jwt: string) {
  const options = { headers: { Authorization: `Bearer ${jwt}` } };

  const user = await fetchAPI<UsersPermissionsMe>("/users/me", { populate: "*" }, options);
  if (!user) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return null;
}
