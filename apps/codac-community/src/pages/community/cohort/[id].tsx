import { Cohort } from "#/components/community/Cohort";
import StudentList from "#/components/community/StudentList";
import router from "next/router";

export default function CohortPage() {
  const cohortName = (router.query.id as string) ?? "";
  return (
    <div className="">
      <Cohort cohortName={cohortName} />
      <StudentList cohortName={cohortName} />
    </div>
  );
}
