import { Card, SkeletonCards } from "codac-ui";

import { useGetMentor } from "#/graphql/hooks";

export const Mentor = ({ id }: { id: string  }) => {
  const { mentor, loading, error } = useGetMentor(id);
  console.log(mentor);

  return (
    <div className="space-y-12">
      {loading && <SkeletonCards number={3} isLoading={loading} />}
      {error && <div>something is wrong</div>}
      <div className="">
        {mentor && (
          <div key={mentor.id}>
            {mentor.attributes && (
              <div className="relative">
                <Card
                  image={mentor.attributes.user?.data.attributes.avatar?.data.attributes.url ?? ""}
                  title={mentor.attributes.user?.data.attributes.username}
                 
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
