import { Boundary, CheckIcon, TagLabel } from "codac-ui";
import Link from "next/link";

import { getProjectBySlug } from "#/strapi-queries/server/pages";

export default async function Page({
  params,
}: {
  params: { projectSlug: string; courseSlug: string };
}) {
  // const project = await getProjectByName({ slug: params.projectSlug });
  const { projectSlug, courseSlug } = params;
  const { project } = await getProjectBySlug({ slug: projectSlug });
  const { sprints, name, description } = project.attributes;

  return (
    <div className="space-y-4">
      <h2 className="text-codac-violet text-4xl font-bold">{name}</h2>
      <p className="text-gray-400">{description}</p>

      {/* <div className="grid grid-cols-1 gap-10 space-y-4 divide-y-2 py-6">
  

        {sprints?.map((sprint) => {
          const lessons = sprint?.lessons?.data ?? [];
          const spikes = sprint?.spikes?.data ?? [];
          const objectives = sprint?.objectives ?? [];
          return (
            <div key={sprint?.id} className="space-y-3 rounded-lg bg-gray-800 p-2">
              <div className="relative my-4 grid grid-cols-1 gap-5 bg-gray-800 lg:grid-cols-2">
                <TagLabel color="pink" labels={[`${sprint?.length} days`]} />
                <div className="grid grid-cols-2 space-y-1.5  px-5 py-3">
                  <h3 className="text-secondary text-center text-2xl font-bold">{sprint?.name}</h3>
                </div>

                {objectives.length > 0 && (
                  <div>
                    <h4 className="text-lg leading-snug text-gray-200">🎯 Objectives</h4>

                    <ul>
                      {objectives.map((objective) => (
                        <li key={objective?.id} className="flex gap-1 align-middle text-white">
                          <CheckIcon className="self-center" />
                          {objective?.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <Boundary labels={["lessons"]} color="orange">
                  {lessons.map((lesson) => {
                    return (
                      <Link
                        href={`./courses/${courseSlug}/${projectSlug}/${
                          lesson.attributes.slug ?? ""
                        }`}
                        key={lesson.id}
                        className="group my-2 block rounded-lg bg-gray-900 px-5 py-3 text-center hover:bg-gray-500"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-gray-50 dark:text-gray-200">
                          {`${lesson.attributes.title}`}
                        </div>
                      </Link>
                    );
                  })}
                </Boundary>
                <Boundary labels={["spikes"]} color="cyan">
                  {spikes.map((spike) => {
                    return (
                      <Link
                        href={`./courses/${courseSlug}/${projectSlug}/${
                          spike.attributes.slug ?? ""
                        }`}
                        key={spike.id}
                        className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                      >
                        <div
                          key={spike.id}
                          className="font-medium text-gray-200 group-hover:text-gray-50"
                        >
                          {spike.attributes.title}
                        </div>
                      </Link>
                    );
                  })}
                </Boundary>
              </div>
            </div> 
          );
        })}
      </div>*/}
    </div>
  );
}
export const dynamic = "force-static";
