import {
  type ChatEntityResponseCollection,
  useGetMeQuery,
  type UsersPermissionsLoginPayload,
  type UsersPermissionsMe,
} from "codac-graphql-types";
import { destroyCookie, setCookie } from "nookies";
import { type } from "os";
import { createContext, type ReactNode, useContext, useEffect, useState } from "react";

import { COOKIES_TOKEN_NAME } from "#/constants";

type User = UsersPermissionsMe | null;

type ChatRooms = ChatEntityResponseCollection | null;

export interface AuthContextValue {
  user: User;
  onLoginSuccess: (login: UsersPermissionsLoginPayload) => void;
  logout: () => void;
  authLoading: boolean;
  chatRooms: ChatRooms;
}

const initialAuth: AuthContextValue = {
  user: null,
  authLoading: false,
  onLoginSuccess: () => {
    throw new Error("onLoginSucces not implemented.");
  },
  logout: () => {
    throw new Error("logout not implemented.");
  },
  chatRooms: null,
};

const AuthContext = createContext<AuthContextValue>(initialAuth);
export const useAuth = (): AuthContextValue => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [chatRooms, setChatRooms] = useState<ChatRooms>(null);
  const { data, error, loading: authLoading, refetch: getMe } = useGetMeQuery();
  console.log("data", data);
  // does this Use Context work??????
  //  the user now is different..... and has no chatrooms...
  useEffect(() => {
    if (data?.me) {
      console.log("this is the updated data/user:", data);
      const user = data.me as UsersPermissionsMe;
      setUser(user);
      const chatRooms = data.chatrooms as ChatRooms;
      setChatRooms(chatRooms);
    }
  }, [data]);

  const onLoginSuccess = (userPayload: UsersPermissionsLoginPayload) => {
    const { jwt, user } = userPayload;

    jwt &&
      setCookie(null, COOKIES_TOKEN_NAME, jwt, {
        // maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    getMe().catch((error) => {
      console.log(error);
    });
  };

  const logout = () => {
    setUser(null);
    destroyCookie(null, COOKIES_TOKEN_NAME, {
      path: "/",
    });
  };
  return (
    <AuthContext.Provider value={{ user, authLoading, logout, onLoginSuccess, chatRooms }}>
      {children}
    </AuthContext.Provider>
  );
};
