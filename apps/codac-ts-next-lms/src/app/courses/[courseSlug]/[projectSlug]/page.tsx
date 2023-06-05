import { Boundary, TabGroup, Timeline } from "codac-ui";
import Link from "next/link";

import { getProjectBySlug } from "#/strapi-queries/pages";

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
  // const projectTimeline = sprints?.map((sprint) => ({
  //   title: sprint?.name ?? "",
  //   description: "",
  //   date: sprint?.length ?? "",
  //   href: ``,
  // }));
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-200">{name}</h2>
      <p className="text-gray-400">{description}</p>

      <div className="grid grid-cols-1 gap-10 space-y-4 divide-y-2 py-6">
        {/* <TabGroup path={`/courses/${courseSlug}/${projectSlug}`} items={[...sprintsLinks]} /> */}
        {/* {projectTimeline && <Timeline color="violet" items={projectTimeline} />} */}

        {sprints?.map((sprint) => {
          const pages = sprint?.pages?.data ?? [];
          const spikes = sprint?.spikes?.data ?? [];
          const objectives = sprint?.objectives ?? [];
          return (
            <div key={sprint?.id} className="space-y-3">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="grid grid-cols-2 space-y-1.5 rounded-lg bg-gray-800 px-5 py-3">
                  <h3 className="text-center text-2xl font-bold text-gray-200">{sprint?.name}</h3>
                  <div className="text-codac-cyan text-lg font-bold leading-snug">
                    {sprint?.length} days
                  </div>
                </div>
                <div className="grid grid-cols-2 space-y-1.5 rounded-lg bg-gray-800 px-5 py-3">
                  <div className="text-codac-pink text-lg font-bold leading-snug">
                    🎯 Objectives
                  </div>
                  <ul>
                    {objectives.map((objective) => (
                      <li key={objective?.id} className="leading-snug text-white">
                        {objective?.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
                <Boundary labels={["spikes"]} color="cyan">
                  {spikes.map((spike) => {
                    return (
                      // <Link
                      //   href={`./courses/${courseSlug}/${projectSlug}/${
                      //     spike.attributes.slug ?? ""
                      //   }`}
                      //   key={spike.id}
                      //   className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                      // >
                      <div
                        key={spike.id}
                        className="font-medium text-gray-200 group-hover:text-gray-50"
                      >
                        {spike.attributes.title}
                      </div>
                      // </Link>
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
