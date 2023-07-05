import { SkeletonCards } from "codac-ui";

import { useGetStudentsByCohorts } from "#/graphql/hooks";

import { StudentCard } from "./StudentCard";

function StudentList({ cohortName }: { cohortName: string }) {
  const { students, loading } = useGetStudentsByCohorts(cohortName);
  console.log("we wanna see this one, i love console.log ",students);
  
  return (
    <>
      <div className="">
 
        {loading && <SkeletonCards number={3} isLoading={loading} />}
        <div className="m-2 flex min-w-full grid-cols-5 flex-wrap object-cover">
          {students &&
            students.map((student) => <StudentCard key={student.id} student={student} />)}
        </div>
      </div>
    </>
  );
}

export default StudentList;
