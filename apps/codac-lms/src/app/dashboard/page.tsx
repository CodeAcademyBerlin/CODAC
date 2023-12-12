export const dynamic = "force-static";
import { Suspense } from "react";

import { getUserDataStreaming } from "#/strapi-queries/streaming/user";
import { fetchStrapiSuspense } from "#/utils/fetch-api";

import { CoursesStreaming, RecommendedCoursesSkeleton } from "./_components/coursesStreaming";
import { UserDataStreaming } from "./_components/userDataStreaming";

// import { Cohorts, RecommendedCohortsSkeleton } from "./_components/cohorts";
// import { Courses, RecommendedCoursesSkeleton } from "./_components/courses";

// export const runtime = "experimental-edge";
const urlParamsObject = {
  populate: ["image"],
};
const token = process.env.CODAC_SSG_TOKEN ?? "";
const options = { headers: { Authorization: `Bearer ${token}` } };
export default async function Page() {
  // const { data: session } = useSession();
  // const [userData, setUserData] = useState<any | null>(null);
  // useEffect(() => {
  //   console.log("session", session);
  //   const token = session?.user?.accessToken ?? "";
  //   console.log("token", token);
  //   const getCourses = async () => {
  //     const res = await getUserData(token);
  //     setUserData(res);
  //   };
  //   token && getCourses();
  // }, [session]);

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {/* {userData && (
        <h2 className="text-secondary text-2xl font-bold">{`${userData.firstname}'s Courses`}</h2>
      )}
      {userData &&
        userData.courses?.map((course: Omit<Course, "x"> & { image: { url: string } }) => (
          <div key={course.name} className="col-span-4 lg:col-span-1">
            <div className="relative">
              <Card
                image={course.image?.url}
                title={course.name ?? ""}
                tag={`${course.months} months`}
                href={`/courses/${course.slug}`}
              />
            </div>
          </div>
        ))} */}

      <div className="grid grid-cols-1 gap-4 p-4">
        <Suspense fallback={<RecommendedCoursesSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <CoursesStreaming
            data={fetchStrapiSuspense({ path: "/courses", urlParamsObject, options })}
          />
        </Suspense>
      </div>
    </div>
  );
}
// <div className="grid grid-cols-1 gap-4 p-4">
//       <Suspense fallback={<RecommendedCoursesSkeleton />}>
//         {/* @ts-expect-error Async Server Component */}
//         <UserDataStreaming data={getUserDataStreaming()} />
//       </Suspense>
//     </div>
