import { SkeletonCards, CohortCard } from "codac-ui";

import { useGetCohortByName } from "#/graphql/hooks";

export const Cohort = ({ cohortName }: { cohortName: string }) => {
  const { cohort, loading, error } = useGetCohortByName(cohortName);

  return (
    <div className=" flex justify-center">
      {loading && <SkeletonCards number={3} isLoading={loading} />}
      {error && <div>something is wrong</div>}
      <div className="flex grid-cols-4 gap-8">
        {cohort && (
          <div key={cohort.id} className="">
            {cohort.attributes && (
              <div className=" ">
                <CohortCard
                  image={cohort.attributes.logo?.data.attributes.url}
                  title={cohort.attributes.name ?? ""}
                  startDate={cohort.attributes.start_date ?? ""}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
