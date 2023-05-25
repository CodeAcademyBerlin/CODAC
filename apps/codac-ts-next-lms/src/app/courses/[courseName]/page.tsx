import { ProjectEntity } from "codac-server-graphql";
import { SkeletonCard } from "codac-ui";
import Link from "next/link";

import { getCourseByName } from "../../api/courses/getCourses";

export default async function Page({ params }: { params: { courseName: string } }) {
  const course = await getCourseByName({ name: params.courseName });
  const { projects } = course.attributes;
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">All {course.attributes.name}</h1>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {projects?.data.map((project) => {
          return (
            <Link
              href={`./${project.attributes.name ?? ""}`}
              key={project.id}
              className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
            >
              <div className="font-medium text-gray-200 group-hover:text-gray-50">
                {project.attributes.name}
              </div>

              {project.attributes.description ?? "" ? (
                <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                  {project.attributes.description}
                </div>
              ) : null}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
