import { Student } from "#/components/community/student";
import router from "next/router";



const StudentId = () => {
  const id = (router.query.id as string) ?? "";

  return <Student id={id} />;
};

export default StudentId;
