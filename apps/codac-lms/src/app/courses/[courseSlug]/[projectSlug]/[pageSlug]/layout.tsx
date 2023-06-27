/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// import { ClickCounter } from '#/ui/click-counter';

import { LMSAddressBar, LMSLayout } from "codac-ui";
import { LMSNav } from "codac-ui/layouts/lms-nav";
import Link from "next/link";

import { getProjectBySlug } from "#/strapi-queries/pages";

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

  const pages = sprints?.map((sprint) => sprint?.lessons).flat()[0]?.data ?? [];
  const index = pages.findIndex((page) => page.attributes.slug === params.pageSlug);
  const nextPage = pages[index + 1];
  const previousPage = pages[index - 1];
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
