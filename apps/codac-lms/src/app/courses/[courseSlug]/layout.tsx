// import { ClickCounter } from '#/ui/click-counter';
// import { Boundary, TabGroup } from "codac-ui";

// import { getProjectsByCoursesName } from "../../strapi-queries/projects";

export default function Layout({
  children,
}: // params,
{
  children: React.ReactNode;
  // params: { courseSlug: string };
}) {
  // const courseSlug = params.courseSlug;
  // const projects = await getProjectsByCoursesName({ slug: courseSlug });

  // const projectsLinks = projects.map((x) => ({
  //   text: x.attributes.name,
  //   slug: x.attributes.slug ?? "",
  // }));

  return (
    <div className="space-y-9">
      {/* <Boundary labels={["projects"]} color="violet">
        <div className="flex justify-between">
          <TabGroup path={`/courses/${courseSlug}`} items={[...projectsLinks]} />
        </div>
      </Boundary> */}
      <div>{children}</div>
    </div>
  );
}
