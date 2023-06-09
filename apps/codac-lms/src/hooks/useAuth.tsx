import type { UsersPermissionsMe } from "codac-server-graphql";
import { notFound } from "next/navigation";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

import { fetchAPI } from "#/utils/fetch-api";

const AuthContext = createContext<{
  user: UsersPermissionsMe | null;
  loading: boolean;
}>({
  user: null,
  loading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UsersPermissionsMe | null>(null);
  console.log("session", session);
  console.log("status", status);
  console.log("user", user);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-floating-promises
    status === "authenticated" && !user && getUser();
  }, [session]);

  const getUser = async () => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (session?.user?.accessToken) {
      const token = session.user.accessToken;
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const urlParamsObject = {
        // sort: { createdAt: 'desc' },
        // filters: {
        //     category: {
        //         slug: filter,
        //     },
        // },
        populate: ["role", "student", "student.course"],
      };
      const data = await fetchAPI<UsersPermissionsMe>("/users/me", urlParamsObject, options, false);

      if (!data) {
        // Render the closest `not-found.js` Error Boundary
        notFound();
      } else {
        setUser(data);

        return null;
      }
    }
  };

  // useEffect(() => {
  //   if (status === "loading") {
  //     setLoading(true);
  //   }
  // }, [status]);

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
