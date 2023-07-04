import { Card, SkeletonCards } from "codac-ui";

import { useGetCohortByName } from "#/graphql/hooks";

export const Cohort = ({ cohortName }: { cohortName: string }) => {
  const { cohort, loading, error } = useGetCohortByName(cohortName);

  return (
    <div className="">
      <div>
        <div className="m-2 space-y-10 text-lg font-medium text-white">Cohort</div>
      </div>
      {loading && <SkeletonCards number={3} isLoading={loading} />}
      {error && <div>something is wrong</div>}
      <div className="flex grid-cols-4 gap-8">
        {cohort && (
          <div key={cohort.id} className="">
            {cohort.attributes && (
              <div className=" ">
                <Card
                  image={cohort.attributes.logo?.data.attributes.url}
                  title={cohort.attributes.name ?? ""}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
