import { type CohortEntity, GetCohortsDocument, type GetCohortsQuery } from "codac-graphql-types";
import { Card } from "codac-ui";
import type { IncomingMessage } from "http";
import type { NextApiRequest } from "next";

import Students from "#/components/community/students";
import { initializeApollo } from "#/lib/apolloClient";

// function Community({ cohorts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
function Community({ cohorts }: { cohorts: CohortEntity[] }) {
  return (
    <>
      <div className="space-y-6">
        <div>
          <div className="text-lg font-medium text-white">Cohorts</div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {cohorts.map((cohort) => (
            <div key={cohort.id} className="col-span-4 lg:col-span-1">
              {cohort.attributes && (
                <div className="relative">
                  <Card
                    image={cohort.attributes.logo?.data.attributes.url}
                    title={cohort.attributes.name ?? ""}
                    tag={`${cohort.attributes.students?.data.length ?? ""} students`}
                    href={`/cohorts/${cohort.id}`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="">
          <Students />
        </div>
      </div>
    </>
  );
}

export default Community;

export const getServerSideProps = async () => {
  try {
    const client = initializeApollo();
    const { data, error } = await client.query<GetCohortsQuery>({ query: GetCohortsDocument });
    const cohorts = data.cohorts?.data ?? [];
    if (cohorts.length === 0 || error) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        cohorts,
      },
    };
  } catch (err) {
    console.log("error: ", JSON.stringify(err));
    return {
      notFound: true,
    };
  }
};
