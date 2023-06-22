import { StudentEntity, useGetStudentsByCohortQuery } from "codac-graphql-types";
import { SkeletonCards } from "codac-ui";

import { useGetCohorts } from "#/graphql/hooks";

import { CardStudent } from "./CardStudent";

function Students() {

  const { students, loading } = useGetCohorts();
  console.log(students)
  return (
    <>
      <div className="space-y-6">
        <div>
          <div className="text-lg font-medium text-white">Students</div>
        </div>
        {loading && <SkeletonCards number={3} isLoading={loading} />}
        <div className="grid grid-cols-4 gap-2">
          {students && students.map((student) => (
            <CardStudent key={student.id} student={student} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Students;
