import { useGetAllCoursesQuery } from "codac-administration";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function Courses() {
  const { data, loading, error } = useGetAllCoursesQuery();
  console.log("🚀 ~ ~ error:", error);
  console.log("🚀 ~ data ~ data:", data);

  const courses = data?.courses?.data;
  console.log("🚀 ~ Courses ~ data:", courses);

  return (
    <Layout>
      <div className="flex flex-col overflow-y-auto px-1 py-7 ">
        <h4 className=" my-2 bg-zinc-800 p-3 font-bold text-[#009688] shadow-xl">
          Courses
        </h4>
        <div>
          {!courses
            ? loading
            : courses.map((course, i) => {
                return (
                  <div
                    className="my-2 w-[75vw] bg-zinc-800 p-3 text-[#009688] shadow-xl"
                    key={i}
                  >
                    <p>
                      <strong>Name of the course:</strong> &emsp;{" "}
                      {course?.attributes?.name}
                    </p>
                    <p>
                      <strong>Description:</strong>
                      &emsp;
                      {course?.attributes?.description}
                    </p>
                    <div className="flex flex-col">
                      <div className="flex flex-col">
                        {course?.attributes?.mentors?.data?.map((mentor, i) => (
                          <div key={i}>
                            <strong>Mentor {i + 1}:</strong> &emsp;
                            <span>
                              {
                                mentor?.attributes?.user?.data?.attributes
                                  ?.firstname
                              }{" "}
                              {
                                mentor?.attributes?.user?.data?.attributes
                                  ?.lastname
                              }{" "}
                              (
                              {
                                mentor?.attributes?.user?.data?.attributes
                                  ?.email
                              }
                              )
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex">
                        <strong>Related projects:</strong> &emsp;
                        {course?.attributes?.projects?.data?.map(
                          (project, i) => (
                            <span key={i}>
                              {project?.attributes?.name} <br />
                              <b>Description:</b>{" "}
                              {project?.attributes?.description} <br />
                              <b>Published at:</b>{" "}
                              {project?.attributes?.publishedAt}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <p>
                      <strong>Period:</strong> &emsp;
                      {course?.attributes?.length} months
                    </p>
                    <Link
                      className="flex justify-end font-bold underline "
                      href={`courses/${course?.attributes?.name}`}
                    >
                      Course page {">>"}
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>
    </Layout>
  );
}
