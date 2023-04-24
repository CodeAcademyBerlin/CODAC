import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { gql } from "@apollo/client";

const Course = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="my-6 flex justify-center p-5">
        <a
          className="underline hover:decoration-double"
          href="#"
          onClick={() => router.back()}
        >
          {"<<"} Back
        </a>
      </div>
      <div className="py-1">
        <p>Course: {id}</p>
      </div>
    </Layout>
  );
};

export default Course;
