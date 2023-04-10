import { useRouter } from "next/router";

const Course = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Course: {id}</p>;
};

export default Course;
