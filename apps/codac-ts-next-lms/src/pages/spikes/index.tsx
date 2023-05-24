import { GetSpikesDocument, type GetSpikesQuery, type SpikeEntity } from "codac-server-graphql";
import Link from "next/link";

import { initializeApollo } from "../../lib/apolloClient";
import type { ApolloGenericQuery } from "../../types/apollo";

export default function Spikes({ spikes }: { spikes: SpikeEntity[] }) {
  return (
    <div className="flex flex-col overflow-y-auto px-1 py-7">
      <h4 className=" my-2 bg-zinc-800 p-3 font-bold text-[#009688] shadow-xl">Spikes</h4>
      <div>
        {spikes.map((spike, i) => {
          return (
            <div className="my-2 w-[75vw] bg-zinc-800 p-3 pb-5 text-[#009688] shadow-xl" key={i}>
              <p>
                <strong>Subject of the spike:</strong> &emsp; {spike.attributes.title}
              </p>
              <p>
                <strong>Day:</strong>
                &emsp;
                {spike.attributes.day}
              </p>
              <Link
                className="float-right inline-block font-bold underline hover:decoration-double"
                href={`spikes/${spike.id}`}
              >
                Spike page {">>"}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const client = initializeApollo(null, null);
    const { data, loading, error } = await client.query<ApolloGenericQuery<SpikeEntity[]>>({
      query: GetSpikesDocument,
    });

    const spikes = data.spikes.data;
    return {
      props: {
        spikes,
      },
    };
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return {
      notFound: true,
    };
  }
}
