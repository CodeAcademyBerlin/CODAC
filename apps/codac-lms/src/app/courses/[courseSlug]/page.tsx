import { Boundary, TagLabel } from "codac-ui";
import Link from "next/link";

import { getCourseBySlug } from "#/strapi-queries/server/courses";

export default async function Page({ params }: { params: { courseSlug: string } }) {
  const course = await getCourseBySlug({ slug: params.courseSlug });
  const { projects } = course.attributes;

  return (
    <div className="space-x-4">
      <h1 className="text-codac-blue text-4xl font-bold">{course.attributes.name}</h1>
      <p className="text-gray-400">{course.attributes.description}</p>
      <div className="grid grid-cols-1 gap-10 space-y-4 py-6">
        <Boundary labels={["projects"]} color="violet">
          <div className="grid grid-cols-1 gap-5">
            {projects?.data.map((project) => {
              return (
                <Link
                  href={`./courses/${params.courseSlug}/${project.attributes.slug ?? ""}`}
                  key={project.id}
                  className="group relative block space-y-1.5 rounded-lg px-5 py-3 hover:bg-gray-800 dark:bg-gray-900"
                >
                  <TagLabel color="violet" labels={[`${project.attributes.calc_length} days`]} />
                  <div className="font-medium text-gray-800 group-hover:text-gray-50 dark:text-gray-200">
                    {project.attributes.name}
                  </div>

                  {project.attributes.description && (
                    <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                      {project.attributes.description}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </Boundary>
      </div>
    </div>
  );
}
export const dynamic = "force-static";
