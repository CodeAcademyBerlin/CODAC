import Link from "next/link";

import { getProjectBySlug } from "#/strapi-queries/server/pages";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    projectSlug: string;
    courseSlug: string;
    pageSlug: string;
  };
}) {
  const { projectSlug } = params;
  const { project } = await getProjectBySlug({ slug: projectSlug });
  const { sprints } = project.attributes;

  const lessons = sprints?.map((sprint) => sprint?.lessons).flat()[0]?.data ?? [];
  const index = lessons.findIndex((lesson) => lesson.attributes.slug === params.pageSlug);
  const nextPage = lessons[index + 1];
  const previousPage = lessons[index - 1];
  return (
    <div className="space-y-9">
      {children}
      <div className="grid grid-cols-2 justify-between gap-4">
        <div className="text-left">
          {previousPage && (
            <Link
              href={`/courses/${params.courseSlug}/${params.projectSlug}/${
                previousPage.attributes.slug ?? ""
              }`}
            >
              <p className="text-codac-pink hover:text-gray-50">Previous</p>
            </Link>
          )}
        </div>
        <div className="text-right">
          {nextPage && (
            <Link
              href={`/courses/${params.courseSlug}/${params.projectSlug}/${
                nextPage.attributes.slug ?? ""
              }`}
            >
              <p className="text-codac-pink hover:text-gray-50">Next</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
