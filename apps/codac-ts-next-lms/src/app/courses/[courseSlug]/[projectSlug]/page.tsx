import { Boundary } from "codac-ui";
import Link from "next/link";

import { getPagesByProjectSlug } from "#/app/strapi-queries/pages";

export default async function Page({
  params,
}: {
  params: { projectSlug: string; courseSlug: string };
}) {
  // const project = await getProjectByName({ slug: params.projectSlug });
  const { projectSlug, courseSlug } = params;
  const {
    pages,
    project,
    // spikes
  } = await getPagesByProjectSlug({ slug: projectSlug });
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-200">{project.attributes.name}</h2>
      <p className="text-gray-400">{project.attributes.description}</p>
      <Boundary labels={["pages"]} color="orange">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {pages.map((page) => {
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
          })}
        </div>
      </Boundary>
    </div>
  );
}
