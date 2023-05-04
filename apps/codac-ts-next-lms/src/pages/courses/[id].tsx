import router from "next/router";
import Layout from "../../components/Layout";
import { useQuery } from "@apollo/client";
import { GET_COURSE_QUERY } from "../getCourse";
import {
  CourseEntity,
  GetAllCoursesDocument,
  useGetAllCoursesQuery,
  MentorEntity,
  ProjectEntity,
  SpikeEntity,
} from "codac-administration";
import { initializeApollo } from "../../lib/apolloClient";

interface CourseProps {
  course: CourseEntity;
}

export default function Course({ course }: CourseProps) {
  const { name, description, length, createdAt, projects, mentors } = course;
  return (
    <Layout>
      <div className="mt-6 mb-2 flex justify-start p-5 font-semibold">
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
          <b>Course id:</b> {course?.id}
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
          {projects?.data?.map((project: ProjectEntity, i: number) => (
            <li key={i}>
              <h2>{project?.attributes?.title}</h2>
              <p>{project?.attributes?.description}</p>
              <ul>
                {" "}
                {project?.attributes?.spikes?.data.map(
                  (spike: SpikeEntity, index: number) => (
                    <li key={index}>{spike?.attributes?.title}</li>
                  )
                )}
              </ul>
            </li>
          ))}
        </ul>
        <ul>
          <b>Mentors: </b>
          {mentors?.data?.map((mentor: MentorEntity, ind: number) => (
            <li key={ind} className="flex gap-1">
              <h2>
                {mentor?.attributes?.user?.data?.attributes?.firstname}{" "}
                {mentor?.attributes?.user?.data?.attributes?.lastname}{" "}
              </h2>
              <p>
                (Email: {mentor?.attributes?.user?.data?.attributes?.email})
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const client = initializeApollo(null, null);

  const { data } = await client.query({
    query: GetAllCoursesDocument,
  });

  const courses = data?.courses?.data;

  const paths = courses.map((course: CourseEntity) => ({
    params: { id: course?.id?.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const client = initializeApollo(null, null);

  const { data } = await client.query({
    query: useGetAllCoursesQuery,
    variables: { id },
  });

  // const { data } = await useQuery(GET_COURSE_QUERY, {
  //   variables: { id },
  // });

  const course = data?.course?.data?.attributes;

  if (!course) {
    return {
      notFound: true,
    };
  }

  return {
    props: { course },
  };
}
