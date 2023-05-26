import { getProjectByName } from "#/app/courses/[courseSlug]/[projectSlug]/getProjects";

export default async function Page({ params }: { params: { projectSlug: string } }) {
  const project = await getProjectByName({ slug: params.projectSlug });
  // const { pages } = project.attributes;
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium text-gray-400/80">{project.attributes.name}</h3>
    </div>
  );
}
