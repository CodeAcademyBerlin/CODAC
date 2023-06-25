import { Card, SkeletonCards } from "codac-ui";

import { useGetStudent } from "#/graphql/hooks";

export const Student = ({ id }: { id: string }) => {
  const { student, loading, error } = useGetStudent(id);

  console.log("Student component (student): ", student, id);

  return (
    <div className="space-y-12">
      {loading && <SkeletonCards number={3} isLoading={loading} />}
      {error && <div>something is wrong</div>}
      <div className="grid grid-cols-4 gap-4 text-white">
        {student && (
          <div key={student.id}>
            {student.attributes && (
              <div className="relative text-white">
                <Card
                  image={student.attributes.user?.data.attributes.avatar?.data.attributes.url ?? ""}
                  title={student.attributes.firstname ?? ""}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
