import { useRouter } from "next/router";

import { CohortCard } from "#/components/community/Cohort";
import StudentList from "#/components/community/StudentList";

export default function CohortPage() {
  const router = useRouter();
  const cohortName = (router.query.id as string) ?? "";
  return (
    <>
      <div className="flex justify-center">
        <CohortCard cohortName={cohortName} />
        <div />
      </div>
      <div>
        <div className="p-6 text-lg font-medium text-white">Students</div>
      </div>
      <div>
        <StudentList cohortName={cohortName} />
      </div>
    </>
  );
}
