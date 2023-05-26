import { SkeletonCard } from "codac-ui";
import { getProjectByName } from "#/app/courses/[courseSlug]/[projectSlug]/getProjects";

export default async function Page({ params }: { params: { projectSlug: string } }) {
  const project = await getProjectByName({ name: params.projectSlug });
  const { pages } = project.attributes;
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{project.attributes.name}</h1>
    </div>
  );
}
