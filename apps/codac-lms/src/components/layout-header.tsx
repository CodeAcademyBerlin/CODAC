"use client";

import { AuthMenu, Button, CodacLogo, Header, SearchBar } from "codac-ui";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

import { useAuth } from "#/hooks/useAuth";

export default function LayoutHeader() {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("user", user);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleSignOut = () => signOut();
  return (
    <Header>
      <Link href="/">
        <div className="text-primary h-10 w-10 hover:opacity-70">
          <CodacLogo />
        </div>
      </Link>
      <div className="w-64">
        <SearchBar />
      </div>
      {user ? (
        <AuthMenu
          handleSignOut={handleSignOut}
          avatar={user?.avatar?.url}
          toggleMenu={toggleMenu}
          isOpen={isMenuOpen}
        />
      ) : (
        <Button
          color="pink"
          onClick={() => {
            signIn();
          }}
        >
          Sign In{" "}
        </Button>
      )}
    </Header>
  );
  // return (
  //   <>
  //     {status !== "authenticated" ? (
  //       <div className="space-y-4">
  //         <h2 className="text-lg font-bold">Sign In</h2>
  //         <p className="text-sm">Sign in to access your courses</p>
  //         <form className="space-y-4">
  //           <div className="space-y-2">
  //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
  //               Email address
  //             </label>
  //             <input
  //               id="email"
  //               name="email"
  //               type="email"
  //               value={email}
  //               autoComplete="email"
  //               onChange={(e) => {
  //                 setEmail(e.target.value);
  //               }}
  //               required
  //               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
  //             />
  //             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
  //               Password
  //             </label>
  //             <input
  //               id="password"
  //               name="password"
  //               value={password}
  //               type="password"
  //               onChange={(e) => {
  //                 setPassword(e.target.value);
  //               }}
  //               autoComplete="current-password"
  //               required
  //               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
  //             />
  //           </div>
  //           <button
  //             onClick={handleSignIn}
  //             className="flex w-full justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
  //           >
  //             Sign In
  //           </button>
  //         </form>
  //       </div>
  //     ) : (
  //       <div className="ml-auto flex gap-4">
  //         <button onClick={async () => signOut()} className="text-red-600">
  //           Sign Out
  //         </button>
  //       </div>
  //     )}
  //   </>
  // );
}
