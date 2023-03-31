import Head from "next/head";
import { Button, Card, Layout } from "codac-ui";
import { useGetAllCoursesQuery } from "codac-administration";

export default function Courses() {
  const { data, loading, error } = useGetAllCoursesQuery();
  console.log("🚀 ~ Courses ~ data:", data);

  const courses = data?.courses?.data;
  console.log("🚀 ~ Courses ~ courses:", typeof courses, courses);
  
  const openClose = () => {
    const sidebar = document.querySelector("#sidebar");
    const path = document.querySelector("path");

    if (sidebar?.classList.contains("hidden")) {
      sidebar.classList.remove("hidden");
      path?.setAttribute(
        "d",
        "M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
      );
    } else {
      sidebar?.classList.add("hidden");
      path?.setAttribute(
        "d",
        "M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
      );
    }
  };

  return (
    <>
      <Head>children</Head>
      <main className="container grid w-screen grid-cols-12 items-start">
        <div
          className="sidebar col-span-3 min-h-screen w-full bg-zinc-800 pt-0"
          id="sidebar"
        >
          <div className="sidebar-item">Web Development</div>
          <div className="sidebar-item">Hello World!</div>
          <div className="sidebar-item">Courses</div>
          <div className="sidebar-item">Mentors</div>
          <div className="sidebar-item">Calendar</div>
          <div className="sidebar-item">Family</div>
        </div>
        <div className="col-span-9 flex w-full flex-col items-start justify-start px-1 py-7">
          <div className="navbar fixed top-0  z-10 flex w-9/12 items-center justify-end gap-1 bg-[#009688] py-3 px-3 text-sm shadow-lg">
            <div className="mr-auto flex text-md">
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={35}
                onClick={openClose}
                id="left"
              >
                <path
                  d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p>CodeAcademy Logo</p>
            </div>
            <div className="flex gap-2">
              <div>Links</div>
              <div>Mode</div>
              <div>User</div>
            </div>
          </div>
          <div className="flex w-full flex-col">
            <p className=" my-2 w-9/12 bg-zinc-800 p-3 font-bold text-[#009688] shadow-xl">
              Courses
            </p>
            <div className="w-full">
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
                            <span>
                              {
                                course?.attributes?.mentors.data[0].attributes
                                  .user.data.attributes.firstname
                              }
                            </span>
                          </div>
                          <div className="flex">
                            <strong>Mentor 2:</strong> &emsp;
                            <span>
                              {
                                course?.attributes?.mentors.data[1].attributes
                                  .user.data.attributes.firstname
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
      </main>
    </>
  );
}
