import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { GET_SPIKE_QUERY } from "../../graphql/getSpike";

const Spike = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_SPIKE_QUERY, {
    variables: { id },
  });

  console.log("data :>> ", data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const spike = data?.spike?.data?.attributes;

  if (!spike) {
    return <p>No spike found for ID {id}</p>;
  }

  const { title, day, url } = spike;

  console.log("spike :>> ", spike);

  return (
    <>
      <div className="mb-2 mt-6 flex justify-start p-5 font-semibold">
        <a
          className="underline hover:decoration-double"
          href="#"
          onClick={() => {
            router.back();
          }}
        >
          {"<<"} Back
        </a>
      </div>
      <div className="mx-5 mb-7 flex flex-col gap-3">
        <p>
          <b>Spike number:</b> {id}
        </p>
        <p>
          <b>Day: </b>
          {day}
        </p>
        <p className="text-md">
          <b>{title}</b>
        </p>

        <video controls>
          <source src={spike.recording.data.attributes.url} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Spike;
