import router from "next/router";

import { Cohort } from "#/components/community/Cohort";
import StudentList from "#/components/community/StudentList";

export default function CohortPage() {
  const cohortName = (router.query.id as string) ?? "";
  return (
    <>
      <Cohort cohortName={cohortName} />
      <StudentList cohortName={cohortName} />
    </>
  );
}
