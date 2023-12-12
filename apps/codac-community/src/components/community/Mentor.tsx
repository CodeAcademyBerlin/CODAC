import { Card, SkeletonCards } from "codac-ui";

import { useGetMentor } from "#/graphql/hooks";

import defaultAvatar from "../../../public/defaultAvatar.png";

export const Mentor = ({ id }: { id: string }) => {
  const { mentor, loading, error } = useGetMentor(id);
  console.log(mentor);

  const avatarUrl = mentor?.attributes?.user?.data?.attributes?.avatar?.data?.attributes?.url ?? "";
  const imageUrl = avatarUrl || defaultAvatar;

  return (
    <div className="flex justify-center">
      {loading && <SkeletonCards number={3} isLoading={loading} />}
      {error && <div>something is wrong</div>}
      <div className="">
        {mentor && (
          <div key={mentor.id}>
            {mentor.attributes && (
              <div className="">
                <Card
                  image={imageUrl}
                  title={mentor.attributes.user?.data.attributes.username}
                  github={mentor?.attributes?.github ?? ""}
                  linkdin={mentor?.attributes?.linkedin ?? ""}
                  email={mentor.attributes.user?.data.attributes.email}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
