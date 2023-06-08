import type { CohortEntity, CohortEntityResponseCollection } from "codac-server-graphql";
import { CohortCard, Ping } from "codac-ui";

import { fetchAPI } from "#/utils/fetch-api";
export const Cohorts = async ({ data }: { data: Promise<Response> }) => {
  const cohorts = (await data.then(async (res) => res.json())) as CohortEntityResponseCollection;

  console.log("cohorts", cohorts);
  return (
    <div className="space-y-6">
      <div>
        <div className="text-lg font-medium text-white">Cohorts</div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {cohorts.data.map((cohort) => (
          <div key={cohort.attributes.name} className="col-span-4 lg:col-span-1">
            <div className="relative">
              <div className="absolute -left-4 top-2">
                {" "}
                <Ping />
              </div>
              <CohortCard cohort={cohort} href={`/cohorts/${cohort.id}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

function CohortSkeleton() {
  return (
    <div className="col-span-4 space-y-4 lg:col-span-1">
      <div className={`relative h-[167px] rounded-xl bg-gray-900 ${shimmer}`} />

      <div className="h-4 w-full rounded-lg bg-gray-900" />
      <div className="h-6 w-1/3 rounded-lg bg-gray-900" />
      <div className="h-4 w-full rounded-lg bg-gray-900" />
      <div className="h-4 w-4/6 rounded-lg bg-gray-900" />
    </div>
  );
}

export function RecommendedCohortsSkeleton() {
  return (
    <div className="space-y-6 pb-[5px]">
      <div className="space-y-2">
        <div className={`h-6 w-1/3 rounded-lg bg-gray-900 ${shimmer}`} />
        <div className={`h-4 w-1/2 rounded-lg bg-gray-900 ${shimmer}`} />
      </div>

      <div className="grid grid-cols-4 gap-6">
        <CohortSkeleton />
        <CohortSkeleton />
        <CohortSkeleton />
        <CohortSkeleton />
      </div>
    </div>
  );
}
