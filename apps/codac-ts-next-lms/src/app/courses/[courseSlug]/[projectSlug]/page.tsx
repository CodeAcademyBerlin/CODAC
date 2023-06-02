import { Boundary, TabGroup, Timeline } from "codac-ui";
import Link from "next/link";

import { getProjectBySlug } from "#/app/strapi-queries/pages";

export default async function Page({
  params,
}: {
  params: { projectSlug: string; courseSlug: string };
}) {
  // const project = await getProjectByName({ slug: params.projectSlug });
  const { projectSlug, courseSlug } = params;
  const { project } = await getProjectBySlug({ slug: projectSlug });
  const { sprints, name, description } = project.attributes;
  // const sprintsLinks = sprints.map((x) => ({
  //   text: x.name ?? "",
  //   slug: x.name ?? "",
  // }));
  // if (!sprints.length) {
  //   // Render the closest `not-found.js` Error Boundary
  //   notFound();
  // }
  const projectTimeline = sprints?.map((sprint) => ({
    title: sprint?.name ?? "",
    description: "",
    date: sprint?.length ?? "",
    href: ``,
  }));
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-200">{name}</h2>
      <p className="text-gray-400">{description}</p>

      <div className="grid grid-cols-1 gap-5">
        {/* <TabGroup path={`/courses/${courseSlug}/${projectSlug}`} items={[...sprintsLinks]} /> */}
        {/* {projectTimeline && <Timeline color="violet" items={projectTimeline} />} */}

        {sprints?.map((sprint) => {
          const pages = sprint?.pages?.data ?? [];
          return (
            <div key={sprint?.id} className="font-medium text-gray-200 group-hover:text-gray-50">
              <h3 className="text-2xl font-bold text-gray-200">{sprint?.name}</h3>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <Boundary labels={["pages"]} color="orange">
                  {pages.map((page) => {
                    return (
                      <Link
                        href={`./courses/${courseSlug}/${projectSlug}/${
                          page.attributes.slug ?? ""
                        }`}
                        key={page.id}
                        className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                      >
                        <div className="font-medium text-gray-200 group-hover:text-gray-50">
                          {page.attributes.title}
                        </div>
                      </Link>
                    );
                  })}
                </Boundary>
              </div>
            </div>
          );
        })}
        {/* {pages.map((page) => {
            return (
              <Link
                href={`./courses/${courseSlug}/${projectSlug}/${page.attributes.slug ?? ""}`}
                key={page.id}
                className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
              >
                <div className="font-medium text-gray-200 group-hover:text-gray-50">
                  {page.attributes.title}
                </div>
              </Link>
            );
          })} */}
      </div>
    </div>
  );
}
export const dynamic = "force-static";
