import { useRouter } from "next/router";

import { Student } from "#/components/community/Student";

const StudentId = () => {
  const router = useRouter();
  const id = (router.query.id as string) ?? "";

  return <Student id={id} />;
};

export default StudentId;
