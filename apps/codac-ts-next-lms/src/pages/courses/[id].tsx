import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const Course = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="py-7">
        <p>Course:{id}</p>
      </div>
    </Layout>
  );
};

export default Course;
