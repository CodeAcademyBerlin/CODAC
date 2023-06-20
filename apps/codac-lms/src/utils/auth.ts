/* eslint-disable turbo/no-undeclared-env-vars */
import type {
  UsersPermissionsLoginPayload,
  UsersPermissionsMe,
  UsersPermissionsUser,
} from "codac-graphql-types";
import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { UserLoginResponse } from "#/types/user";
import { fetchAPI } from "#/utils/fetch-api";

export const authOptions: AuthOptions = {
  theme: {
    colorScheme: "auto", // "auto" | "dark" | "light"
    brandColor: "#00897B", // Hex color code
    logo: "../../codac-logo.png", // Absolute URL to image
    buttonText: "#FF0080", // Hex color code
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
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
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        console.log("profile", profile);
        const strapiToken = process.env.CODAC_OAUTH_TOKEN ?? "";

        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${strapiToken}`,
          },
        };

        const users = await fetchAPI<UsersPermissionsUser[]>(
          `/users`,
          {
            filters: { email: profile?.email },
          },
          options,
          false
        );

        if (users.length && users[0].email === profile?.email) {
          return true;
          // return profile.email_verified && profile.email.endsWith(profile.email);
        }
        return "/unauthorized";
      }
      // return false;
      // Do different verification for other providers that don't have `email_verified`
      return true;
    },

    async jwt({ token, account, user }) {
      if (account?.provider === "google") {
        const strapiToken = process.env.CODAC_OAUTH_TOKEN ?? "";

        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${strapiToken}`,
          },
        };

        const { jwt, user: userData } = await fetchAPI<UsersPermissionsLoginPayload>(
          `/auth/${account.provider}/callback`,
          {
            access_token: account.access_token,
          },
          options,
          false
        );

        if (jwt != null) {
          const options = { headers: { Authorization: `Bearer ${jwt}` } };
          const urlParamsObject = {
            // sort: { createdAt: 'desc' },
            // filters: {
            //     category: {
            //         slug: filter,
            //     },
            // },
            populate: ["role", "student", "student.course"],
          };

          const data = await fetchAPI<UsersPermissionsMe>(
            "/users/me",
            urlParamsObject,
            options,
            false
          );
          console.log("data", data);
          token.accessToken = jwt;
          token.id = userData.id;
          token.userRole = data.role?.name;
        }
      }
      // If we are using credentials, we already have the token from strapi
      else {
        // (token.id = user.id), (token.jwt = user.jwt);
        return { ...token, ...user };
      }
      return token;
    },
    session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (session.user) {
        session.user.accessToken = token.accessToken;
        session.user.id = token.id;
        session.user.role = token.userRole;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
