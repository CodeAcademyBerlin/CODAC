import { Ping, Reviews, ReviewsSkeleton } from "codac-ui";
import { Suspense } from "react";

import { getStrapiURL } from "#/utils/api-helpers";

import {
  RecommendedCourses,
  RecommendedCoursesSkeleton,
} from "../../_components/recommended-courses";
import { SingleCourse } from "../../_components/single-course";

export const runtime = "experimental-edge";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8 lg:space-y-14">
      {/* @ts-expect-error Async Server Component */}
      {/* <SingleCourse data={fetch(`${getStrapiURL()}/api/course?id=${params.id}`)} /> */}

      <div className="relative">
        <div className="absolute -left-4 top-2">
          {" "}
          <Ping />{" "}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-4 top-2">
          {" "}
          <Ping />{" "}
        </div>
      </div>

      <Suspense fallback={<RecommendedCoursesSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <RecommendedCourses
          path="/course"
          data={fetch(`${getStrapiURL()}/api/courses`, {
            // We intentionally disable Next.js Cache to better demo
            // streaming
            // cache: "no-store",
          })}
        />
      </Suspense>
    </div>
  );
}
