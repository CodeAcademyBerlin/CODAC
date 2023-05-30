// import { ClickCounter } from '#/ui/click-counter';
import { Boundary, TabGroup } from "codac-ui";

import { getPagesByProjectSlug } from "../../../strapi-queries/pages";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    projectSlug: string;
    courseSlug: string;
  };
}) {
  // const { projectSlug, courseSlug } = params;
  // const {
  //   pages,
  //   // spikes
  // } = await getPagesByProjectSlug({ slug: projectSlug });

  // const pagesLinks = pages.map((x) => ({
  //   text: x.attributes.title,
  //   slug: x.attributes.slug ?? "",
  // }));
  // const spikesLinks =
  //   spikes.map((x) => ({
  //     text: x.attributes.title ?? "",
  //     slug: x.attributes.title ?? "",
  //   })) ?? [];
  return (
    <div className="space-y-9">
      {/* <div className="flex gap-2">
        <div className="flex-auto">
          <Boundary labels={["pages"]} color="orange">
            <TabGroup path={`/courses/${courseSlug}/${projectSlug}`} items={[...pagesLinks]} />
          </Boundary>
        </div>
     
      </div> */}

      <div>{children}</div>
    </div>
  );
}
