import { getServerSession } from "next-auth/next";
import { Suspense } from "react";

import { authOptions } from "#/utils/auth";
import { fetchStrapiSuspense } from "#/utils/fetch-api";

import { Cohorts, RecommendedCohortsSkeleton } from "./_components/cohorts";
import { Courses, RecommendedCoursesSkeleton } from "./_components/courses";

// export const runtime = "experimental-edge";
const urlParamsObject = {
  populate: ["image"],
};
const token = process.env.CODAC_SSG_TOKEN ?? "";
const options = { headers: { Authorization: `Bearer ${token}` } };
export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log("session", session);
  return (
    <div className="space-y-8 lg:space-y-14">
      <Suspense fallback={<RecommendedCoursesSkeleton />}>
        {/* @ts-expect-error Async Server Component */}

        <Courses data={fetchStrapiSuspense({ path: "/courses", urlParamsObject, options })} />
      </Suspense>

      {/* <Suspense fallback={<RecommendedCohortsSkeleton />}>

        <Cohorts data={fetchStrapiSuspense({ path: "/cohorts", urlParamsObject, options })} />
      </Suspense> */}

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
