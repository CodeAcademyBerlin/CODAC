import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { Boundary, Button } from "../components";
interface Label {
  label: string;
  color: "blue" | "violet" | "orange";
  colorClass: string;
}
const labels: Label[] = [
  { label: "course", color: "blue", colorClass: "hover:text-codac-blue" },
  { label: "project", color: "violet", colorClass: "hover:text-codac-violet" },
  { label: "page", color: "orange", colorClass: "hover:text-codac-orange" },
];
export function LMSAddressBar() {
  const pathname = usePathname();
  const segments = pathname.split("/").slice(1) ?? [];
  const lmsSegments = pathname.split("/").slice(2) ?? [];

  return (
    <div className="flex flex-col gap-y-3 ">
      <div className="my-2">
        <Link href="/courses">
          <Button className="text-codac-cyan" color="cyan">
            courses
          </Button>
        </Link>
      </div>
      {lmsSegments.map((segment, i) => {
        return (
          <Boundary size="small" key={segment} labels={[labels[i].label]} color={labels[i].color}>
            {i !== lmsSegments.length - 1 ? (
              <span>
                <span
                  key={segment}
                  className={`${labels[i].colorClass} animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 py-0.5 text-gray-100`}
                >
                  <Link href={`/${segments.slice(0, segments.indexOf(segment) + 1).join("/")}`}>
                    {segment}
                  </Link>
                </span>
              </span>
            ) : (
              <span>
                <span
                  key={segment}
                  className="animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 py-0.5 text-gray-100"
                >
                  {segment}
                </span>
              </span>
            )}
          </Boundary>
        );
      })}
    </div>
  );
}
