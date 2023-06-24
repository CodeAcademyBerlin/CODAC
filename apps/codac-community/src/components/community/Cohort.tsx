import { Card, SkeletonCards } from "codac-ui";

import { useGetCohortByName } from "#/graphql/hooks";

export const Cohort = () => {
  const { cohort, loading, error } = useGetCohortByName();
  console.log(cohort);
  return (
    <div className="space-y-12">
      <div className=" text-white">helloooo</div>
      {loading && <SkeletonCards number={3} isLoading={loading} />}
      {error && <div>something is wrong</div>}
      <div className="grid grid-cols-4 gap-4">
        {cohort && (
          <div key={cohort.id}>
            {cohort.attributes && (
              <div className="relative">
                <Card image={cohort.attributes.logo?.data.attributes.url} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
