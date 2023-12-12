"use client";

import { BrandText, CodacLogo, LMSTreeNav, SpinnerIcon } from "codac-ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { getLMSTree } from "#/strapi-queries/client/courses";

export default function LayoutSideNav() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const segments = pathname.split("/").splice(1);
  const [lmsTree, setLmsTree] = useState<any>(null);
  console.log("segments", segments);
  console.log("lmsTree", lmsTree);
  useEffect(() => {
    const getTree = async () => {
      if (session?.user?.accessToken) {
        const token = session.user.accessToken;
        const tree = await getLMSTree();
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
      {lmsTree ? <LMSTreeNav segments={segments} courses={lmsTree} /> : <SpinnerIcon />}
    </div>
  );
}
