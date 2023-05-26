// import { DynamicSections } from "codac-ui";

import { getPageBySlug } from "#/app/api/pages/getPages";
import { dynamicSections } from "#/components/dynamic-sections";

export default async function Page({ params }: { params: { pageSlug: string } }) {
  console.log("params", params);
  const page = await getPageBySlug({ slug: params.pageSlug });
  console.log("page", page.attributes.contentSections);
  const { contentSections } = page.attributes;
  return (
    <div className="flex ">
      <div className="flex-auto">
        {contentSections?.map((content) => dynamicSections({ section: content }))}
      </div>
    </div>
  );
}
