import {
  type CourseEntity,
  GetAllCoursesDocument,
  GetCourseDocument,
  type GetCourseQuery,
  type MentorEntity,
  type ProjectEntity,
  type SpikeEntity,
} from "codac-server-graphql";

import { initializeApollo } from "../../lib/apolloClient";

interface CourseProps {
  course: CourseEntity;
}

export default function Course({ course }: CourseProps) {
  const { name, description, projects, mentors } = course.attributes;
  return (
    <>
      <div className="space-y-8 lg:space-y-14">
        <div className="col-span-full space-y-4 lg:col-span-2">
          <h1 className="truncate text-xl font-medium text-white lg:text-3xl">{name}</h1>

          <div className="space-y-4 text-gray-200">{description}</div>
        </div>

        <b>Related projects:</b>
        <ul>
          {projects?.data.map((project: ProjectEntity, i: number) => (
            <li key={i}>
              <h2>{project.attributes.name}</h2>
              <p>{project.attributes.description}</p>
              <ul>
                {" "}
                {project.attributes.spikes?.data.map((spike: SpikeEntity, index: number) => (
                  <li key={index}>{spike.attributes.title}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <ul>
          <b>Mentors: </b>
          {mentors?.data.map((mentor: MentorEntity, ind: number) => (
            <li key={ind} className="flex gap-1">
              <h2>
                {mentor.attributes.user?.data.attributes.firstname}{" "}
                {mentor.attributes.user?.data.attributes.lastname}{" "}
              </h2>
              <p>(Email: {mentor.attributes.user?.data.attributes.email})</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

type ApolloListQueryGen<Type> = Record<
  string,
  {
    data: Type[];
  }
>;

export async function getStaticPaths() {
  try {
    const client = initializeApollo(null, null);

    const { data } = await client.query<ApolloListQueryGen<CourseEntity>>({
      query: GetAllCoursesDocument,
    });

    const courses = data.courses.data;

    const paths = courses.map((course) => ({
      params: { id: course.id.toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { id } = params;

  const client = initializeApollo(null, null);

  const { data } = await client.query<GetCourseQuery>({
    query: GetCourseDocument,
    variables: { id },
  });

  // const { data } = await useQuery(GET_COURSE_QUERY, {
  //   variables: { id },
  // });

  const course = data.course?.data;

  if (!course) {
    return {
      notFound: true,
    };
  }

  return {
    props: { course },
  };
}
