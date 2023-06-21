"use client";

import {
  AuthMenu,
  BrandText,
  Button,
  CodacLogo,
  Header,
  LMSAddressBar,
  LMSSideNav,
  SearchBar,
  SpinnerIcon,
} from "codac-ui";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

import { useAuth } from "#/contexts/useAuth";
import { getLMSTree } from "#/strapi-queries/courses";
import { getUserLMSTree } from "#/strapi-queries/user";

export default function LayoutSideNav() {
  // const { user } = useAuth();
  const { data: session } = useSession();
  const [lmsTree, setLmsTree] = useState({});
  const [menuOpen, setMenuOpen] = useState(true);
  console.log("lmsTree", lmsTree);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const getTree = async () => {
      // if (session?.user?.accessToken) {
      //   const token = session.user.accessToken;
      //   const tree = await getUserLMSTree();
      //   setLmsTree(tree);
      // }
    };
    getTree();
  }, [session?.user?.accessToken]);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // only add the event listener when the menu is opened
    if (!menuOpen) return;
    function handleClick(event: { target: any }) {
      if (menu.current && !menu.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [menuOpen]);

  return (
    <div ref={menu}>
      <LMSSideNav isOpen={menuOpen} toggleOpen={handleMenuToggle} content={<NavContent />} />
    </div>
  );
}

const NavContent = () => (
  <>
    <Link
      href="/dashboard"
      className="group flex items-center  gap-x-2.5 group-hover:border-white/50"
    >
      <div className="h-7 w-7">
        <CodacLogo className="fill-primary" />
      </div>
      <BrandText>CODAC LMS</BrandText>
      {/* <h3 className="text-primary font-semibold tracking-wide dark:text-gray-400 dark:group-hover:text-gray-50">
            {header}
          </h3> */}
    </Link>
    <LMSAddressBar />
  </>
);
