import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import type { UserLoginResponse } from "#/types/user";
import { fetchAPI } from "#/utils/fetch-api";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const path = `/auth/local`;

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: credentials?.email,
            password: credentials?.password,
          }),
        };
        const { jwt: accessToken, user: userData } = await fetchAPI<UserLoginResponse>(
          `/auth/local`,
          { populate: "*" },
          options,
          false
        );
        console.log("userData", userData);
        // const { user: userData, jwt, error } = await res.json();
        if (userData && accessToken) {
          const user = { ...userData, accessToken };
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      return { ...token, ...user };
    },

    session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};

export default NextAuth(authOptions);
// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
