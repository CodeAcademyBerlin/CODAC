// import Students from "#/components/community/students";
import { type CohortEntity, GetCohortsDocument, type GetCohortsQuery } from "codac-graphql-types";
import { Card } from "codac-ui";

import MentorList from "#/components/community/MentorList";
import { initializeApollo } from "#/lib/apolloClient";

function Community({ cohorts }: { cohorts: CohortEntity[] }) {
  return (
    <>
      <div className="space-y-10 p-10">
        <div>
          <div className="text-lg font-medium text-white">Cohorts</div>
        </div>
        <div className="flex min-w-full grid-cols-5 flex-wrap gap-4 object-cover">
          {cohorts.map((cohort) => (
            <div
              key={cohort.id}
              className=" object-cover transition-transform duration-300 hover:scale-105"
            >
              {cohort.attributes && (
                <div className="relative  ">
                  <Card
                    image={cohort.attributes.logo?.data.attributes.url}
                    title={cohort.attributes.name ?? ""}
                    tag={`${cohort.attributes.students?.data.length ?? ""} students`}
                    href={`community/cohort/${cohort.attributes.name}`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="space-y-10 p-10 text-lg font-medium text-white">Staffs</div>
      </div>
      <div>
        <MentorList />
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
