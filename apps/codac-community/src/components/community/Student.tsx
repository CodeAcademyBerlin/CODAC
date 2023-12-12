import { Card, SkeletonCards } from "codac-ui";

import { useGetStudent } from "#/graphql/hooks";

export const Student = ({ id }: { id: string }) => {
  const { student, loading, error } = useGetStudent(id);

  console.log("Student component (student): ", student, id);

  return (
    <div className="flex justify-center">
      {loading && <SkeletonCards number={3} isLoading={loading} />}
      {error && <div>something is wrong</div>}
      <div className="flex grid-cols-4 gap-2 text-white">
        {student && (
          <div key={student.id}>
            {student.attributes && (
              <div className="relative object-cover text-white">
                <Card
                  image={student.attributes.user?.data.attributes.avatar?.data.attributes.url ?? ""}
                  title={student.attributes.firstname ?? ""}
                  github={student?.attributes?.github ?? ""}
                  linkdin={student?.attributes?.linkedin ?? ""}
                  course={student.attributes?.course?.data?.attributes?.name || ""}
                  email={student.attributes.user?.data.attributes.email}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
