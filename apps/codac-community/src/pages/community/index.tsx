import { initializeApollo } from "#/lib/apolloClient";
import { CohortEntity, GetCohortsDocument, GetCohortsQuery } from "codac-server-graphql";
import { Ping, Card } from "codac-ui";
import { IncomingMessage } from "http";
import { InferGetServerSidePropsType, GetServerSideProps, NextApiRequest } from "next";

// function Community({ cohorts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
function Community({ cohorts }: { cohorts: CohortEntity[] }) {
  return (
    <>
      <h1>CodaCommunity</h1>

      <div className="space-y-6">
        <div>
          <div className="text-lg font-medium text-white">Cohorts</div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {cohorts.map(
            (cohort) =>
              cohort?.attributes && (
                <div key={cohort.id} className="col-span-4 lg:col-span-1">
                  <div className="relative">
                    <Card
                      image={cohort.attributes.logo?.data.attributes.url}
                      title={cohort.attributes.name ?? ""}
                      tag={`${cohort.attributes.students?.data.length ?? ""} students`}
                      href={`/cohorts/${cohort.id}`}
                    />
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Community;

export const getServerSideProps = async (ctx: { req: NextApiRequest | IncomingMessage | null }) => {
  try {
    const client = initializeApollo({ serverToken: true });
    const { data, error } = await client.query<GetCohortsQuery>({ query: GetCohortsDocument });
    const cohorts = data.cohorts?.data ?? [];
    console.log("data", data);
    if (cohorts.length === 0 || error) {
      console.log("error", error);
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
