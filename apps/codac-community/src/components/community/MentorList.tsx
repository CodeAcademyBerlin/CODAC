import { MentorEntity } from "codac-graphql-types";
import { SkeletonCards, CardList } from "codac-ui";

// import { AvatarCard } from "codac-ui";
import { useGetMentors } from "#/graphql/hooks";

import defaultAvatar from "../../../public/defaultAvatar.png";

const MentorList = () => {
  const { mentors, loading, error } = useGetMentors();
  console.log(mentors);

  return (
    <>
      <div className="flex justify-center">
        {loading && <SkeletonCards number={3} isLoading={loading} />}
        {error && <div>something is wrong</div>}
        <div className="flex justify-center grid-cols-2 flex-wrap ">
          {mentors &&
            mentors.map((mentor: MentorEntity) => {
              const avatarUrl =
                mentor.attributes?.user?.data?.attributes?.avatar?.data?.attributes?.url;
              const imageUrl = avatarUrl || defaultAvatar;
              return (
                <div
                  key={mentor.id}
                  className="duration-400 transform transition-transform hover:scale-105"
                >
                  {mentor.attributes && (
                    <div className="">
                      <CardList
                        image={imageUrl}
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
