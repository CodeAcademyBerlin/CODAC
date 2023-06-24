import { Boundary, TagLabel, Timeline } from "codac-ui";
import Link from "next/link";

import { getCourseBySlug } from "#/strapi-queries/courses";

export default async function Page({ params }: { params: { courseSlug: string } }) {
  const course = await getCourseBySlug({ slug: params.courseSlug });
  const { projects } = course.attributes;
  // const projectTimeline = projects?.data.map((project) => ({
  //   title: project.attributes.name,
  //   description: project.attributes.description ?? "",
  //   date: `${project.attributes.calc_length} days` ?? "",
  //   href: `./courses/${params.courseSlug}/${project.attributes.slug ?? ""}`,
  // }));
  return (
    // <div className="bg-gray-300-border-gradient rounded-lg border border-slate-900 bg-zinc-950 p-px shadow-lg shadow-black dark:bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)]">
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
                  className="group relative block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                >
                  <TagLabel color="violet" labels={[`${project.attributes.calc_length} days`]} />
                  <div className="font-medium text-gray-200 group-hover:text-gray-50">
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
// export const revalidate = "force-cache";
export const dynamic = "force-static";
