// export { default } from "next-auth/middleware";
// export const config = {
//   matcher: ["/courses/:path*"],
// };
import { withAuth } from "next-auth/middleware";

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // `/admin` requires admin role
      console.log("req.", req.nextUrl);
      if (req.nextUrl.pathname === "/courses/(.*)") {
        console.log("token", token);
        return token?.userRole === "Mentor";
      }
      // `/me` only requires the user to be logged in
      return !!token;
    },
  },
});

export const config = { matcher: ["/courses/(.*)"] };
