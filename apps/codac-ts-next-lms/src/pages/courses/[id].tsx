import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { useQuery } from "@apollo/client";
import { GET_COURSE_QUERY } from "../getCourse";

const Course = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_COURSE_QUERY, {
    variables: { id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const course = data?.course?.data?.attributes;

  if (!course) {
    return <p>No course found for ID {id}</p>;
  }

  const { name, description, length, createdAt, projects, mentors } = course;

  return (
    <Layout>
      <div className="mt-6 mb-2 flex justify-start p-5">
        <a
          className="underline hover:decoration-double"
          href="#"
          onClick={() => router.back()}
        >
          {"<<"} Back
        </a>
      </div>
      <div className=" mx-5">
        <p>
          <b>Course id:</b> {id}
        </p>
      </div>

      <br />
      <br />

      <div className="mx-5 flex flex-col gap-2">
        <h1 className="py-2">
          <b>{name}</b>
        </h1>
        <p>{description}</p>
        <p>
          <b>Length:</b> {length} months
        </p>
        <p>
          <b>Created at:</b> {createdAt}
        </p>
        <ul>
          <b>Related projects:</b>
          {projects.data.map((project, i) => (
            <li key={i}>
              <h2>{project.attributes.title}</h2>
              <p>{project.attributes.description}</p>
              <ul>
                {" "}
                {project.attributes.spikes.data.map((spike, index: number) => (
                  <li key={index}>{spike.attributes.title}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <ul>
          <b>Mentors: </b>
          {mentors.data.map((mentor, ind: number) => (
            <li key={ind} className="flex gap-1">
              <h2>
                {mentor.attributes.user.data.attributes.firstname}{" "}
                {mentor.attributes.user.data.attributes.lastname}{" "}
              </h2>
              <p>(Email: {mentor.attributes.user.data.attributes.email})</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Course;
