// import Students from "#/components/community/students";
import { type CohortEntity, GetCohortsDocument, type GetCohortsQuery } from "codac-graphql-types";
import { Cohorts } from "codac-ui";

import MentorList from "#/components/community/mentorList";
import { initializeApollo } from "#/lib/apolloClient";

function Community({ cohorts }: { cohorts: CohortEntity[] }) {
  return (
    <>
      <div>
        <div className="p-6 text-lg font-medium text-white">Cohorts</div>
      </div>
      <div className="">
        <div className="flex min-w-full grid-cols-6 flex-wrap justify-center ">
          {cohorts.map((cohort) => (
            <div key={cohort.id} className="">
              {cohort.attributes && (
                <div className="relative">
                  <Cohorts
                    image={cohort.attributes.logo?.data.attributes.url}
                    startDate={cohort.attributes.start_date ?? ""}
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
        <div className="space-y-10 p-6 text-lg font-medium text-white">Mentors</div>
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
