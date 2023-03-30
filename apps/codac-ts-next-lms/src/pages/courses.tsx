import Head from "next/head";
import { Button, Card, Layout } from "codac-ui";
import { useGetAllCoursesQuery } from "codac-administration";

export default function Courses() {
  const { data, loading, error } = useGetAllCoursesQuery();
  console.log("🚀 ~ Courses ~ data:", data);

  const courses = data?.courses?.data;
  console.log("🚀 ~ Courses ~ courses:", typeof courses, courses);

  return (
    <div className="container grid grid-cols-6 items-start ">
      <div className="sidebar col-span-1 min-h-screen bg-zinc-800 pt-0">
        <div className="sidebar-item">Hello World!</div>
        <div className="sidebar-item">Courses</div>
        <div className="sidebar-item">Mentors</div>
        <div className="sidebar-item">Calendar</div>
        <div className="sidebar-item">Family</div>
      </div>
      <div className="col-span-5 flex w-full flex-col items-start justify-start px-5 py-7 ">
        <div className="fixed top-0 z-10  w-full bg-[#009688] py-3 px-3 shadow-lg">
          Navbar
        </div>
        <p className=" my-2 w-full bg-zinc-800 p-3 font-bold text-[#009688] shadow-xl">
          Courses
        </p>
        <div>
          {!courses
            ? loading
            : courses.map((course, i) => {
                return (
                  <div
                    className="my-2 w-full bg-zinc-800 p-3 text-[#009688] shadow-xl"
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
                        <span>
                          {
                            course?.attributes?.mentors.data[0].attributes.user
                              .data.attributes.firstname
                          }
                        </span>
                      </div>
                      <div className="flex">
                        <strong>Mentor 2:</strong> &emsp;
                        <span>
                          {
                            course?.attributes?.mentors.data[1].attributes.user
                              .data.attributes.firstname
                          }
                        </span>
                      </div>
                    </div>
                    <p>
                      <strong>Period:</strong> &emsp;
                      {course?.attributes.length} months
                    </p>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
