"use client";

import { BrandText, CodacLogo, LMSTreeNav } from "codac-ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

import { getUserLMSTree } from "#/strapi-queries/user";

export default function LayoutSideNav() {
  // const { user } = useAuth();

  const [menuOpen, setMenuOpen] = useState(true);

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
      <NavContent />
    </div>
  );
}

const NavContent = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const segments = pathname.split("/").splice(1);
  const [lmsTree, setLmsTree] = useState<any>(null);
  console.log("segments", segments);
  useEffect(() => {
    const getTree = async () => {
      if (session?.user?.accessToken) {
        const token = session.user.accessToken;
        const tree = await getUserLMSTree();
        setLmsTree(tree);
      }
    };
    getTree();
  }, [session?.user?.accessToken]);
  return (
    <div className="my-5 px-1">
      <Link
        href="/dashboard"
        className="group flex items-center  gap-x-2.5 group-hover:border-white/50"
      >
        <div className="h-7 w-7">
          <CodacLogo className="fill-primary" />
        </div>
        <BrandText>CODAC LMS</BrandText>
      </Link>
      {lmsTree && <LMSTreeNav segments={segments} courses={lmsTree} />}
    </div>
  );
};
