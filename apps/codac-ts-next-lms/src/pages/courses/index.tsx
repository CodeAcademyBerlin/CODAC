import {
  type CourseEntity,
  GetAllCoursesDocument,
  type GetAllCoursesQuery,
} from "codac-server-graphql";
import { Card } from "codac-ui";

import { initializeApollo } from "../../lib/apolloClient";
Courses.theme = "light";
export default function Courses({ courses }: { courses: CourseEntity[] }) {
  return (
    <div className="space-y-7">
      <h1 className="text-3xl font-semibold text-white">Courses</h1>
      {/* <Particles type="confetti" /> */}
      <div className="xs:grid-cols-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => {
          return (
            <Card
              key={course.id}
              name={course.attributes.name ?? ""}
              description={course.attributes.description ?? ""}
              href={`/courses/${course.id}`}
            />
            // <div
            //   className="col-span-4 lg:col-span-1"
            //   key={i}
            // >
            //   <p>
            //     <strong>Name of the course:</strong> &emsp;{" "}
            //     {course?.attributes?.name}
            //   </p>
            //   <p>
            //     <strong>Description:</strong>
            //     &emsp;
            //     {course?.attributes?.description}
            //   </p>
            //   <div className="flex flex-col">
            //     <div className="flex flex-col">
            //       <div className="flex flex-col">
            //         {course?.attributes?.mentors?.data?.map((mentor, i) => (
            //           <div key={i}>
            //             <strong>Mentor {i + 1}:</strong> &emsp;
            //             <span>
            //               {
            //                 mentor?.attributes?.user?.data?.attributes
            //                   ?.firstname
            //               }{" "}
            //               {
            //                 mentor?.attributes?.user?.data?.attributes
            //                   ?.lastname
            //               }{" "}
            //               (
            //               {
            //                 mentor?.attributes?.user?.data?.attributes
            //                   ?.email
            //               }
            //               )
            //             </span>
            //           </div>
            //         ))}
            //       </div>
            //       <div className="flex">
            //         <strong>Related projects:</strong> &emsp;
            //         {course?.attributes?.projects?.data?.map(
            //           (project, i) => (
            //             <span key={i}>
            //               {project?.attributes?.name} <br />
            //               <b>Description:</b>{" "}
            //               {project?.attributes?.description} <br />
            //               <b>Published at:</b>{" "}
            //               {project?.attributes?.publishedAt}
            //             </span>
            //           )
            //         )}
            //       </div>
            //     </div>
            //     <p>
            //       <strong>Period:</strong> &emsp;
            //       {course?.attributes?.length} months
            //     </p>
            //     <Link
            //       className="flex justify-end font-bold underline hover:decoration-double"
            //       href={`courses/${course?.id}`}
            //     >
            //       Course page {">>"}
            //     </Link>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
}
type ApolloListQueryGen<Type> = Record<
  string,
  {
    data: Type[];
  }
>;
export async function getStaticProps() {
  // const { data, loading, error } = useGetAllCoursesQuery();
  // console.log("🚀 ~ ~ error:", error);
  // console.log("🚀 ~ data ~ data:", data);
  const client = initializeApollo(null, null);

  const { data, loading, error } = await client.query<ApolloListQueryGen<CourseEntity>>({
    query: GetAllCoursesDocument,
  });

  const courses = data.courses.data;
  console.log("🚀 ~ Courses ~ data:", courses);
  return {
    props: {
      courses,
    },
  };
}
