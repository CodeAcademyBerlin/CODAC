import { Card, SkeletonCards } from "codac-ui";

import { useGetCohortByName } from "#/graphql/hooks";

export const Cohort = ({ cohortName }: { cohortName: string }) => {
  const { cohort, loading, error } = useGetCohortByName(cohortName);

  return (
    <div className="space-y-12 ">
      <div>
        <div className="space-y-6 text-lg font-medium text-white">Cohort</div>
      </div>
      {loading && <SkeletonCards number={3} isLoading={loading} />}
      {error && <div>something is wrong</div>}
      <div className="flex grid-cols-4 gap-8">
        {cohort && (
          <div key={cohort.id} className="flex items-center justify-between">
            {cohort.attributes && (
              <div className="relative ">
                <Card image={cohort.attributes.logo?.data.attributes.url} />
              </div>
            )}
            <div className="text-white">
              <h2>{cohort.attributes.name}</h2>
              <h2>{cohort.attributes.start_date}</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
