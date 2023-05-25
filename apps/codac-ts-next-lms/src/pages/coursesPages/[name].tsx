import {
  type CourseEntity,
  GetAllCoursesDocument,
  GetCourseByNameDocument,
  type MentorEntity,
} from "codac-server-graphql";
import { AddressBar, Card } from "codac-ui";

import { initializeApollo } from "../../lib/apolloClient";
import type { ApolloGenericQuery } from "../../types/apollo";

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
        <div className="xs:grid-cols-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects?.data.map((project) => {
            console.log("project", project);
            return (
              <Card
                key={project.id}
                name={project.attributes.name ?? ""}
                description={project.attributes.description ?? ""}
                href={`./${name ?? ""}/project/${project.id}`}
              />
            );
          })}
        </div>

        {/* {mentors?.data.map((mentor: MentorEntity, ind: number) => (
          <li key={ind} className="flex gap-1">
            <h2>
              {mentor.attributes.user?.data.attributes.firstname}{" "}
              {mentor.attributes.user?.data.attributes.lastname}{" "}
            </h2>
            <p>(Email: {mentor.attributes.user?.data.attributes.email})</p>
          </li>
        ))} */}
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

    const {
      data: { courses },
    } = await client.query<ApolloListQueryGen<CourseEntity>>({
      query: GetAllCoursesDocument,
    });

    const paths = courses.data.map((course) => ({
      params: { name: course.attributes.name },
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

export async function getStaticProps({ params }: { params: { name: string } }) {
  try {
    const { name } = params;
    const client = initializeApollo(null, null);
    const {
      data: { courses },
    } = await client.query<ApolloGenericQuery<CourseEntity[]>>({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      query: GetCourseByNameDocument,
      variables: { name },
    });

    const course = courses.data[0];

    return {
      props: { course },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
