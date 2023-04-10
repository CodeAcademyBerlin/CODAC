import { useGetAllCoursesQuery } from "codac-administration";
import Layout from "../../components/Layout";

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
          SOmething SOmething SOmething SOmething SOmething SOmething SOmething
          {!courses
            ? loading
            : courses.map((course, i) => {
                return (
                  <div
                    className="my-2 w-fit bg-zinc-800 p-3 text-[#009688] shadow-xl"
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
                      <div className="flex">
                        <strong>Mentor 1:</strong> &emsp;
                        {/* <span>
                          {
                            course?.attributes?.mentors.data[0].attributes.user
                              .data.attributes.firstname
                          }
                        </span> */}
                      </div>
                      <div className="flex">
                        <strong>Mentor 2:</strong> &emsp;
                        {/* <span>
                          {
                            course?.attributes?.mentors.data[1].attributes.user
                              .data.attributes.firstname
                          }
                        </span> */}
                      </div>
                    </div>
                    <p>
                      <strong>Period:</strong> &emsp;
                      {course?.attributes?.length} months
                    </p>
                  </div>
                );
              })}
        </div>
      </div>
    </Layout>
  );
}
