import { MentorEntity } from "codac-graphql-types";
import { SkeletonCards } from "codac-ui";
import { Card } from "codac-ui";

import { useGetMentors } from "#/graphql/hooks";

const MentorList = () => {
  const { mentors, loading, error } = useGetMentors();
  console.log(mentors);

  return (
    <>
      <div className="">
        {loading && <SkeletonCards number={3} isLoading={loading} />}
        {error && <div>something is wrong</div>}
        <div className="flex min-w-full grid-cols-5 flex-wrap ">
          {mentors &&
            mentors.map((mentor: MentorEntity) => {
              const avatarUrl =
                mentor.attributes?.user?.data?.attributes?.avatar?.data?.attributes?.url;
              const imageUrl = avatarUrl || "/apps/codac-community/public/static/defaultAvatar.png";
              return (
                <div
                  key={mentor.id}
                  className="duration-400 transform transition-transform hover:scale-105"
                >
                  {mentor.attributes && (
                    <div className="">
                      <Card
                        image={imageUrl}
                        //course
                        title={mentor.attributes.user?.data.attributes.username}
                        href={`/community/mentor/${mentor.id}`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MentorList;
