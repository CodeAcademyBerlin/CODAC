import { SkeletonCard } from "codac-ui";
import { getProjectByName } from "src/app/api/projects/getProjects";

import { getPageBySlug } from "#/app/api/pages/getPages";

export default async function Page({ params }: { params: { pageSlug: string } }) {
  console.log("params", params);
  const page = await getPageBySlug({ slug: params.pageSlug });
  console.log("page", page);
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{page.attributes.name}</h1>
    </div>
  );
}
