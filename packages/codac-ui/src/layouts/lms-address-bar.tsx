"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { type } from "os";
import React, { Suspense } from "react";

import { Boundary } from "../components";
// function Params() {
//   const searchParams = useSearchParams()!;

//   return searchParams.toString().length !== 0 ? (
//     <div className="px-2 text-gray-500">
//       <span>?</span>
//       {Array.from(searchParams.entries()).map(([key, value], index) => {
//         return (
//           <React.Fragment key={key}>
//             {index !== 0 ? <span>&</span> : null}
//             <span className="px-1">
//               <span key={key} className="animate-[highlight_1s_ease-in-out_1] text-gray-100">
//                 {key}
//               </span>
//               <span>=</span>
//               <span key={value} className="animate-[highlight_1s_ease-in-out_1] text-gray-100">
//                 {value}
//               </span>
//             </span>
//           </React.Fragment>
//         );
//       })}
//     </div>
//   ) : null;
// }
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
  console.log("lmsSegments", lmsSegments);
  console.log("segments", segments);
  return (
    <div className="flex flex-col gap-y-3 ">
      {/* <div className="text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
      </div> */}
      {/* <div className="text-sm font-medium">
         <div>
          <span className="px-2 text-gray-400">acme.com</span>
        </div> */}

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

      {/* <Suspense>
          <Params />
        </Suspense>
      </div> */}
    </div>
  );
}
