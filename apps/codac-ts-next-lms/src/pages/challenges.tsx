import { useGetChallengesQuery } from "codac-server-graphql";

export default function Challenges() {
  const { data, loading, error } = useGetChallengesQuery();
  if (data) {
    console.log("data", data);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <p>Challenges</p>
      {data &&
        data.codingChallenges?.data.map((challenge) => {
          return <p key={challenge.attributes?.challenge}>{challenge.attributes?.challenge}</p>;
        })}
    </div>
  );
}
