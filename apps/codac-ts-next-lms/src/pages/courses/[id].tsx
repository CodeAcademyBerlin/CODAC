import { useRouter } from "next/router";

import {
  CourseEntity,
  GetAllCoursesDocument,
  MentorEntity,
  ProjectEntity,
  SpikeEntity,
  Course as CourseType,
} from "codac-administration";
import { initializeApollo } from "../../lib/apolloClient";
import { GET_COURSE_QUERY } from "../../graphql/getCourse";
import { AddressBar } from "codac-ui";

interface CourseProps {
  course: CourseType;
  id: string;
}

export default function Course({ course, id }: CourseProps) {
  const router = useRouter();
  const { name, description, length, createdAt, projects, mentors } = course;
  return (
    <>
      <div className="space-y-8 lg:space-y-14">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-full space-y-4 lg:col-span-2">
            <h1 className="truncate text-xl font-medium text-white lg:text-3xl">
              {name}
            </h1>

            <div className="space-y-4 text-gray-200">{description}</div>
          </div>
        </div>
      </div>

      {/* <div className="mx-5 flex flex-col gap-2">
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
              <h2>{project?.attributes?.name}</h2>
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
      </div>*/}
    </>
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

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { id } = params;

  const client = initializeApollo(null, null);

  const { data } = await client.query({
    query: GET_COURSE_QUERY,
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
    props: { course, id },
  };
}
