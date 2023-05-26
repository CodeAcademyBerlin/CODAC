// import { ClickCounter } from '#/ui/click-counter';
import { Boundary, TabGroup } from "codac-ui";

import { getProjectsByCoursesName } from "./[projectSlug]/getProjects";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseSlug: string };
}) {
  const courseSlug = params.courseSlug;
  const projects = await getProjectsByCoursesName({ name: courseSlug });

  const projectsLinks = projects.map((x) => ({
    text: x.attributes.description ?? "",
    slug: x.attributes.name ?? "",
  }));

  return (
    <div className="space-y-9">
      <Boundary labels={["projects"]} color="violet">
        <div className="flex justify-between">
          <TabGroup path={`/courses/${courseSlug}`} items={[...projectsLinks]} />
          <div className="self-start">{/* <ClickCounter /> */}</div>
        </div>
      </Boundary>
      <div>{children}</div>
    </div>
  );
}
