import { MentorEntity } from "codac-graphql-types";
import { SkeletonCards } from "codac-ui";
import { Card } from "codac-ui";

import { useGetMentors } from "#/graphql/hooks";

const ListMentors = () => {
  const { mentors, loading, error } = useGetMentors();
  console.log(mentors);

  return (
    <>
      <div className="space-y-6">
        {loading && <SkeletonCards number={3} isLoading={loading} />}
        {error && <div>something is wrong</div>}
        <div className="grid grid-cols-4 gap-2">
          {mentors &&
            mentors.map((mentor: MentorEntity) => (
              <div key={mentor.id} className="">
                {mentor.attributes && (
                  <div className="relative">
                    <Card
                      image={
                        mentor.attributes.user?.data.attributes.avatar?.data.attributes.url ?? ""
                      }
                      title={mentor.attributes.user?.data.attributes.username}
                      href={`/community/mentor/${mentor.id}`}
                    />
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ListMentors;
