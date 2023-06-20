import { UserIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { RefObject } from "react";
interface AuthMenuProps {
  avatar?: string;
  isOpen: boolean;
  toggleMenu: () => void;
  handleSignOut: () => void;
  passRef: RefObject<HTMLDivElement>;
}
export const AuthMenu = ({
  avatar,
  isOpen = false,
  toggleMenu,
  handleSignOut,
  passRef,
}: AuthMenuProps) => {
  console.log("isOpen", isOpen);
  return (
    <>
      <div
        ref={passRef}
        onClick={toggleMenu}
        className="relative flex shrink-0 cursor-pointer gap-x-3"
      >
        <div
          className={clsx(
            "absolute right-0 top-12 z-10 mt-2 origin-top-right rounded-sm bg-zinc-600 transition-all duration-100",
            {
              "block w-44": isOpen,
              "hidden w-0": !isOpen,
            }
          )}
        >
          <AuthMenuDropdown handleSignOut={handleSignOut} />
        </div>
        {avatar ? (
          <Image src={avatar} className="rounded-full" width={40} height={40} alt="User" />
        ) : (
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-600 text-white">
            <UserIcon className="w-6 text-white" />
          </div>
        )}
        <div className="bg-codac-cyan absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-sm text-black">
          <span>4</span>
        </div>
      </div>
    </>
  );
};

const AuthMenuDropdown = ({ handleSignOut }: { handleSignOut: () => void }) => (
  <div className="py-1" role="none">
    <p className="block px-4 py-2 text-sm text-gray-100">Account</p>
    {/* <Link
        href="/account"
        className="block px-4 py-2 text-sm text-gray-700"
      >
        Account
      </Link> */}
    <button
      className="block w-full px-4 py-2 text-left text-sm text-gray-100"
      onClick={handleSignOut}
    >
      Sign out
    </button>
  </div>
);
