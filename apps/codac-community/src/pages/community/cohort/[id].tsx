import { CohortCard } from "#/components/community/cohort";
import StudentList  from "#/components/community/studentList";
import router from "next/router";

export default function CohortPage() {
  const cohortName = (router.query.id as string) ?? "";
  return (
    <>
      <div>
        <div className="p-6 text-lg font-medium text-white">Cohorts</div>
      </div>
      <div className="flex justify-center">
        <CohortCard cohortName={cohortName} />
        <div />
      </div>
      <div>
        <div className="p-6 text-lg font-medium text-white">Students</div>
      </div>
      <div>
        <StudentList  cohortName={cohortName} />
      </div>
    </>
  );
}
