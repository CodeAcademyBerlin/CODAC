import Head from "next/head";
import { Button, Card, Layout } from "codac-ui";
import { useGetAllCoursesQuery } from "codac-administration";

export default function Courses() {
  const { data, loading, error } = useGetAllCoursesQuery();
  console.log("🚀 ~ Courses ~ data:", data);

  const courses = data?.courses?.data;
  console.log("🚀 ~ Courses ~ courses:", typeof courses, courses);

  return (
    <div className="flex min-h-screen flex-col items-start justify-start px-9 py-7 text-slate-100">
      <p className="py-4 text-red-400">Courses</p>
      {courses?.map((course) => {
        return (
          <div className="my-3 flex gap-5 ">
            <div className="flex flex-col items-end">
              <p>Name of the course: </p>
              <p>Description: </p>
              <p> Mentor 1:</p>
              <p> Mentor 2:</p>
            </div>

            <div>
              <p>{course?.attributes?.name}</p>
              <p>{course?.attributes?.description}</p>
              <span>{course?.attributes?.mentors[0]}</span>
              <span>{course?.attributes?.mentors[1]}</span>

              <p>Period: {course?.attributes.length} months</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
