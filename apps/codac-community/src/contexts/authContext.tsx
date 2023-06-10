import type { UsersPermissionsLoginPayload, UsersPermissionsMe } from "codac-graphql-types";
import { destroyCookie, setCookie } from "nookies";
import { createContext, type ReactNode, useState } from "react";

type User = UsersPermissionsMe | null;

export interface AuthContextValue {
  user: User;
  // onLoginSucces: (login: UsersPermissionsLoginPayload, rememberMe: boolean) => void;
  logout: () => void;
}

const initialAuth: AuthContextValue = {
  user: null,
  // onLoginSucces: () => {
  //   throw new Error("onLoginSucces not implemented.");
  // },
  logout: () => {
    throw new Error("logout not implemented.");
  },
};

// ** Create Context
export const AuthContext = createContext<AuthContextValue>(initialAuth);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(initialAuth.user);

  // const getUser = async () => {
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const res = await fetch("/api/user", options);
  //   const data = await res.json();
  //   const user: User = data.user;
  //   if (user) {
  //     setUser(user);
  //   }
  // };

  const onLoginSuccess = (userPayload: UsersPermissionsLoginPayload) => {
    const { jwt } = userPayload;

    jwt &&
      setCookie(null, "token", jwt, {
        // maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
  };
  const logout = () => {
    setUser(null);
    destroyCookie(null, "token", {
      path: "/",
    });
  };
  return <AuthContext.Provider value={{ user, logout }}>{children}</AuthContext.Provider>;
};
