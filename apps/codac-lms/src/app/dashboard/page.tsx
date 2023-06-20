import { Suspense } from "react";

import { fetchStrapiSuspense } from "#/utils/fetch-api";

// import { Cohorts, RecommendedCohortsSkeleton } from "./_components/cohorts";
import { Courses, RecommendedCoursesSkeleton } from "./_components/courses";

// export const runtime = "experimental-edge";
const urlParamsObject = {
  populate: ["image"],
};
const token = process.env.CODAC_SSG_TOKEN ?? "";
const options = { headers: { Authorization: `Bearer ${token}` } };
export default async function Page() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <Suspense fallback={<RecommendedCoursesSkeleton />}>
        {/* @ts-expect-error Async Server Component */}

        <Courses data={fetchStrapiSuspense({ path: "/courses", urlParamsObject, options })} />
      </Suspense>
    </div>
  );
}
