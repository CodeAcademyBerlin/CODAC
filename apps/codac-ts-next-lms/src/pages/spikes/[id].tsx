import { useGetSpikeQuery } from "codac-server-graphql";
import { useRouter } from "next/router";

const Spike = () => {
  const router = useRouter();
  const { id } = router.query;
  const stringId = id as string;
  const { loading, error, data } = useGetSpikeQuery({
    variables: { id: stringId },
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

  const { title, day } = spike;

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

        {spike.recording?.data?.attributes && (
          <video controls>
            <source src={spike.recording.data.attributes.url} type="video/mp4" />
          </video>
        )}
      </div>
    </>
  );
};

export default Spike;
