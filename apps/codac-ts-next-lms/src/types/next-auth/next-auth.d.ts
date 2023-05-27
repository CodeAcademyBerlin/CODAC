import type { DefaultSession, DefaultUser } from 'next-auth';
import type { DefaultJWT, JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  /**
   * Returned by the `jwt` callback and `getToken`, when using JWT sessions
   *
   * [`jwt` callback](https://next-auth.js.org/configuration/callbacks#jwt-callback) | [`getToken`](https://next-auth.js.org/tutorials/securing-pages-and-api-routes#using-gettoken)
   */
  export interface JWT extends Record<string, unknown>, DefaultJWT {
    accessToken?: string;
    id?: string;
    exp?: string;
    iat?: string;
    jti?: string;
  }
}

declare module 'next-auth' {
  /**
   * The shape of the returned object in the OAuth providers' `profile` callback,
   * available in the `jwt` and `session` callbacks,
   * or the second parameter of the `session` callback, when using a database.
   *
   * [`signIn` callback](https://next-auth.js.org/configuration/callbacks#sign-in-callback) |
   * [`session` callback](https://next-auth.js.org/configuration/callbacks#jwt-callback) |
   * [`jwt` callback](https://next-auth.js.org/configuration/callbacks#jwt-callback) |
   * [`profile` OAuth provider callback](https://next-auth.js.org/configuration/providers#using-a-custom-provider)
   */
  export interface User extends DefaultUser {
    accessToken: string;
  }

  export interface Session extends DefaultSession {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    } & JWT;
  }

  // interface AAuthOptions extends OriginalAuthOptions {
  //   session?: Partial<SessionOptions>;
  // }
  /** [Documentation](https://next-auth.js.org/configuration/callbacks) */
  export interface CallbacksOptions<P = Profile, A = Account> extends CallbacksOptions<P, A> {
    /**
     * Use this callback to control if a user is allowed to sign in.
     * Returning true will continue the sign-in flow.
     * Throwing an error or returning a string will stop the flow, and redirect the user.
     *
     * [Documentation](https://next-auth.js.org/configuration/callbacks#sign-in-callback)
     */
    signIn: (params: {
      user: User | AdapterUser;
      account: A | null;
      /**
       * If OAuth provider is used, it contains the full
       * OAuth profile returned by your provider.
       */
      profile?: P;
      /**
       * If Email provider is used, on the first call, it contains a
       * `verificationRequest: true` property to indicate it is being triggered in the verification request flow.
       * When the callback is invoked after a user has clicked on a sign in link,
       * this property will not be present. You can check for the `verificationRequest` property
       * to avoid sending emails to addresses or domains on a blocklist or to only explicitly generate them
       * for email address in an allow list.
       */
      email?: {
        verificationRequest?: boolean;
      };
      /** If Credentials provider is used, it contains the user credentials */
      credentials?: Record<string, CredentialInput>;
    }) => Awaitable<string | boolean>;
    /**
     * This callback is called anytime the user is redirected to a callback URL (e.g. on signin or signout).
     * By default only URLs on the same URL as the site are allowed,
     * you can use this callback to customise that behaviour.
     *
     * [Documentation](https://next-auth.js.org/configuration/callbacks#redirect-callback)
     */
    redirect: (params: {
      /** URL provided as callback URL by the client */
      url: string;
      /** Default base URL of site (can be used as fallback) */
      baseUrl: string;
    }) => Awaitable<string>;
    /**
     * This callback is called whenever a session is checked.
     * (Eg.: invoking the `/api/session` endpoint, using `useSession` or `getSession`)
     *
     * ⚠ By default, only a subset (email, name, image)
     * of the token is returned for increased security.
     *
     * If you want to make something available you added to the token through the `jwt` callback,
     * you have to explicitly forward it here to make it available to the client.
     *
     * [Documentation](https://next-auth.js.org/configuration/callbacks#session-callback) |
     * [`jwt` callback](https://next-auth.js.org/configuration/callbacks#jwt-callback) |
     * [`useSession`](https://next-auth.js.org/getting-started/client#usesession) |
     * [`getSession`](https://next-auth.js.org/getting-started/client#getsession) |
     *
     */
    session: (params: { session: Session; user: User | AdapterUser; token: JWT }) => Awaitable<Session>;
    /**
     * This callback is called whenever a JSON Web Token is created (i.e. at sign in)
     * or updated (i.e whenever a session is accessed in the client).
     * Its content is forwarded to the `session` callback,
     * where you can control what should be returned to the client.
     * Anything else will be kept from your front-end.
     *
     * ⚠ By default the JWT is signed, but not encrypted.
     *
     * [Documentation](https://next-auth.js.org/configuration/callbacks#jwt-callback) |
     * [`session` callback](https://next-auth.js.org/configuration/callbacks#session-callback)
     */
    jwt: (params: {
      token: JWT;
      user?: User | AdapterUser;
      account?: A | null;
      profile?: P;
      isNewUser?: boolean;
    }) => Awaitable<JWT>;
  }
}
export * from 'next-auth';
