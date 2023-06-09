import { Ping, Reviews, ReviewsSkeleton } from "codac-ui";
import { Suspense } from "react";

import { fetchStrapiSuspense } from "#/utils/fetch-api";

import { Cohorts, RecommendedCohortsSkeleton } from "./_components/cohorts";

// export const runtime = "experimental-edge";
const urlParamsObject = {
  populate: ["logo"],
};
export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8 lg:space-y-14">
      <Suspense fallback={<RecommendedCohortsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}

        <Cohorts data={fetchStrapiSuspense({ path: "/cohorts", urlParamsObject })} />
      </Suspense>

      {/* <Suspense fallback={<RecommendedCoursesSkeleton />}>
       @ts-expect-error Async Server Component 
        <RecommendedCourses
          path="/course"
          data={fetch(`${getStrapiURL()}/api/courses`, {
            // We intentionally disable Next.js Cache to better demo
            // streaming
            // cache: "no-store",
          })}
        />
      </Suspense> */}
    </div>
  );
}
