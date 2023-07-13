import { SkeletonCards, Card } from "codac-ui";

import { useGetCohortByName } from "#/graphql/hooks";

export const CohortCard = ({ cohortName }: { cohortName: string }) => {
  const { cohort, loading, error } = useGetCohortByName(cohortName);

  return (
    <div className="">
      {loading && <SkeletonCards number={3} isLoading={loading} />}
      {error && <div>something is wrong</div>}
      <div className="flex grid-cols-4 gap-4">
        {cohort && (
          <div key={cohort.id} className="">
            {cohort.attributes && (
              <div className="">
                <Card
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
