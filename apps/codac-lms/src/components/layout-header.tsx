"use client";

import { AuthMenu, BrandText, Button, CodacLogo, Header, SearchBar, SpinnerIcon } from "codac-ui";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

import { useAuth } from "#/contexts/useAuth";

export default function LayoutHeader() {
  const { user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);

  console.log("user", user);
  const session = useSession();
  console.log("session", session);
  const toggleMenu = () => setDropdownOpen(!dropdownOpen);
  const handleSignOut = () => signOut();
  useEffect(() => {
    // only add the event listener when the menu is opened
    if (!dropdownOpen) return;
    function handleClick(event: { target: any }) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [dropdownOpen]);
  return (
    <Header>
      <div className="flex-grow"></div>
      <div className="w-64">
        <SearchBar />
      </div>

      {session.status === "loading" ? (
        <SpinnerIcon className="-ml-1 mr-3 h-5 w-5 animate-spin text-white" />
      ) : (
        <>
          {session.status === "authenticated" ? (
            <AuthMenu
              handleSignOut={handleSignOut}
              avatar={user?.avatar?.url}
              toggleMenu={toggleMenu}
              isOpen={dropdownOpen}
              passRef={dropdown}
            />
          ) : (
            <Button
              color="cyan"
              onClick={() => {
                signIn();
              }}
            >
              Sign In{" "}
            </Button>
          )}
        </>
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
