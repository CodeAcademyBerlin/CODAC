import { Boundary, Timeline } from "codac-ui";
import Link from "next/link";

import { getCourseBySlug } from "#/app/strapi-queries/courses";

export default async function Page({ params }: { params: { courseSlug: string } }) {
  const course = await getCourseBySlug({ slug: params.courseSlug });
  const { projects, objectives } = course.attributes;
  // const projectTimeline = projects?.data.map((project) => ({
  //   title: project.attributes.name,
  //   description: project.attributes.description ?? "",
  //   date: project.attributes.length?.toString() ?? "",
  //   href: `./courses/${params.courseSlug}/${project.attributes.slug ?? ""}`,
  // }));
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-gray-200">{course.attributes.name}</h1>
      <p className="text-gray-400">{course.attributes.description}</p>
      {/* {objectives.map((objective) => (
        <p key={objective} className="text-gray-400">
          {objective}
        </p>
      ))} */}

      <Boundary labels={["projects"]} color="violet">
        {/* {projectTimeline && <Timeline color="violet" items={projectTimeline} />} */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects?.data.map((project) => {
            return (
              <Link
                href={`./courses/${params.courseSlug}/${project.attributes.slug ?? ""}`}
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
      </Boundary>
    </div>
  );
}
// export const revalidate = "force-cache";
export const dynamic = "force-static";
