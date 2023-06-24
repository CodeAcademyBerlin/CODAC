import { useRouter } from "next/router";

import { Cohort } from "#/components/community/Cohort";
import StudentList from "#/components/community/StudentList";

export default function CohortPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const cohortName = (router.query.id as string) ?? "";
  return (
    <>
      <Cohort cohortName={cohortName} />
      <StudentList cohortName={cohortName} />
    </>
  );
}
