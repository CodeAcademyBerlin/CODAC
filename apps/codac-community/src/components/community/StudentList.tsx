import { SkeletonCards } from "codac-ui";

import { useGetStudentsByCohorts } from "#/graphql/hooks";

import { StudentCard } from "./StudentCard";

function StudentList({ cohortName }: { cohortName: string }) {
  const { students, loading } = useGetStudentsByCohorts(cohortName);
  console.log("we wanna see this one, i love console.log ", students);

  return (
    <>
      <div className="flex justify-center">
        {loading && <SkeletonCards number={3} isLoading={loading} />}
        <div className="flex grid-cols-5 flex-wrap justify-center">
          {students &&
            students.map((student) => <StudentCard key={student.id} student={student} />)}
        </div>
      </div>
    </>
  );
}

export default StudentList;
