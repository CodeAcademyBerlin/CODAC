import { MentorEntity } from "codac-graphql-types";
import { SkeletonCards } from "codac-ui";
import { Card } from "codac-ui";

import { useGetMentors } from "#/graphql/hooks";

const Staffs = () => {
 
  // const { data, loading, error } = useGetAllStaffsQuery();
  // const mentors = data?.mentors?.data ?? [];
  const { mentors, loading, error } = useGetMentors()
  console.log(mentors)
  
  return (
    <>
      
      <div className="space-y-6">
        <div>
          <div className="text-lg font-medium text-white">Students</div>
        </div>
        {loading && <SkeletonCards number={3} isLoading={loading} />}
        {error && <div>something is wrong</div>}
        <div className="grid grid-cols-4 gap-2">
          {mentors && mentors.map((mentor:MentorEntity) => (
            <div key={mentor.id} className="">
              {mentor.attributes && (
                <div className="relative">
                  <Card
                  image={mentor.attributes.user?.data.attributes.avatar?.data.attributes.url ?? ""}
                  // title={staff.attributes.firstname ?? ""}
                  // tag={`${cohort.attributes.students?.data.length ?? ""} students`}
                  // href={`/students/${staff.id}`}
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

export default Staffs;
