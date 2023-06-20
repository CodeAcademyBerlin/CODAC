import { UserIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
interface AuthMenuProps {
  avatar?: string;
  isOpen: boolean;
  toggleMenu: () => void;
  handleSignOut: () => void;
}
export const AuthMenu = ({ avatar, isOpen = false, toggleMenu, handleSignOut }: AuthMenuProps) => {
  return (
    <>
      <div onClick={toggleMenu} className="relative flex shrink-0 cursor-pointer gap-x-3">
        {isOpen && <AuthMenuDropdown handleSignOut={handleSignOut} />}
        {avatar ? (
          <Image src={avatar} className="rounded-full" width={40} height={40} alt="User" />
        ) : (
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-600 text-white">
            <UserIcon className="w-6 text-white" />
            <div className="bg-codac-cyan absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-sm font-bold text-cyan-800">
              <span>4</span>
            </div>
          </div>
        )}
      </div>
      {/*  <div className="relative inline-block">
   
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
*/}
    </>
  );
};

const AuthMenuDropdown = ({ handleSignOut }: { handleSignOut: () => void }) => (
  <div
    className="absolute right-0 top-10 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    role="menu"
    // aria-orientation="vertical"
    // aria-labelledby="menu-button"
    tabIndex={-1}
  >
    <div className="py-1" role="none">
      {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
      <Link
        href="/account"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabIndex={-1}
        id="menu-item-0"
      >
        Account
      </Link>
      <button
        type="submit"
        className="block w-full px-4 py-2 text-left text-sm text-gray-700"
        tabIndex={-1}
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </div>
  </div>
);
