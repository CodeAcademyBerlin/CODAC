import type {
  CourseEntityResponseCollection,
  UsersPermissionsMe,
  UsersPermissionsUser,
} from "codac-server-graphql";
import { CourseCard } from "codac-ui";

import { fetchAPI } from "#/utils/fetch-api";
export const UserInfo = async ({ data }: { data: Promise<Response> }) => {
  const users = (await data.then(async (res) => res.json())) as UsersPermissionsUser[];

  console.log("users", users);
  return (
    <div className="space-y-6">
      <div>
        <div className="text-lg font-medium text-white">User Info</div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {users.map((user) => (
          <div key={user.email} className="col-span-4 lg:col-span-1">
            {user.username}
          </div>
        ))}
      </div>
    </div>
  );
};

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

function CourseSkeleton() {
  return (
    <div className="col-span-4 space-y-4 lg:col-span-1">
      <div className={`relative h-[167px] rounded-xl bg-gray-900 ${shimmer}`} />

      <div className="h-4 w-full rounded-lg bg-gray-900" />
      <div className="h-6 w-1/3 rounded-lg bg-gray-900" />
      <div className="h-4 w-full rounded-lg bg-gray-900" />
      <div className="h-4 w-4/6 rounded-lg bg-gray-900" />
    </div>
  );
}

export function RecommendedCoursesSkeleton() {
  return (
    <div className="space-y-6 pb-[5px]">
      <div className="space-y-2">
        <div className={`h-6 w-1/3 rounded-lg bg-gray-900 ${shimmer}`} />
        <div className={`h-4 w-1/2 rounded-lg bg-gray-900 ${shimmer}`} />
      </div>

      <div className="grid grid-cols-4 gap-6">
        <CourseSkeleton />
        <CourseSkeleton />
        <CourseSkeleton />
        <CourseSkeleton />
      </div>
    </div>
  );
}
