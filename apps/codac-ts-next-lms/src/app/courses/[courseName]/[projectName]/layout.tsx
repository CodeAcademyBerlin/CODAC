// import { ClickCounter } from '#/ui/click-counter';
import { Boundary, TabGroup } from "codac-ui";

import { getPagesByProjectName } from "#/app/api/pages/getPages";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    projectName: string;
    courseName: string;
  };
}) {
  const { projectName, courseName } = params;
  const { pages, spikes } = await getPagesByProjectName({ name: projectName });

  const pagesLinks = pages.map((x) => ({
    text: x.attributes.title,
    slug: x.attributes.slug ?? "",
  }));
  const spikesLinks = spikes.map((x) => ({
    text: x.attributes.title ?? "",
    slug: x.attributes.title ?? "",
  }));
  return (
    <div className="space-y-9">
      <div className="flex gap-2">
        <div className="flex-auto">
          <Boundary labels={["pages"]} color="orange">
            <TabGroup path={`/courses/${courseName}/${projectName}`} items={[...pagesLinks]} />
            <div className="self-start">{/* <ClickCounter /> */}</div>
          </Boundary>
        </div>
        <div className="flex-auto">
          <Boundary labels={["spikes"]} color="cyan">
            <TabGroup path={`/courses/${courseName}/${projectName}`} items={[...spikesLinks]} />
            <div className="self-start">{/* <ClickCounter /> */}</div>
          </Boundary>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
