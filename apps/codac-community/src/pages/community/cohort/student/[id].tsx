import { useRouter } from "next/router";

import { Student } from "#/components/community/Student";

const StudentId = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const id = (router.query.id as string) ?? "";
  return <Student id={id} />;
};

export default StudentId;
