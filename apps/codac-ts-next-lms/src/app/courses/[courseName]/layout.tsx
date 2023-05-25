// import { ClickCounter } from '#/ui/click-counter';
import { Boundary, TabGroup } from "codac-ui";

import { getProjectsByCoursesName } from "../../api/projects/getProjects";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseName: string };
}) {
  const courseName = params.courseName;
  const projects = await getProjectsByCoursesName({ name: courseName });

  const projectsLinks = projects.map((x) => ({
    text: x.attributes.name ?? "",
    slug: x.attributes.name ?? "",
  }));

  return (
    <div className="space-y-9">
      <Boundary labels={["projects"]} color="violet">
        <div className="flex justify-between">
          <TabGroup path={`/courses/${courseName}`} items={[...projectsLinks]} />
          <div className="self-start">{/* <ClickCounter /> */}</div>
        </div>
      </Boundary>

      <div>{children}</div>
    </div>
  );
}
