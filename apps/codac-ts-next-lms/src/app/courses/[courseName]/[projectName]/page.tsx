import { SkeletonCard } from "codac-ui";
import { getProjectByName } from "src/app/api/projects/getProjects";

export default async function Page({ params }: { params: { projectName: string } }) {
  const project = await getProjectByName({ name: params.projectName });
  const { pages } = project.attributes;
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{project.attributes.name}</h1>
    </div>
  );
}
