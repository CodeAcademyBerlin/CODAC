import { dynamicSections } from "#/components/dynamic-sections";
import { getPageBySlug } from "#/strapi-queries/pages";

export default async function Page({ params }: { params: { pageSlug: string } }) {
  const page = await getPageBySlug({ slug: params.pageSlug });

  const { contentSections } = page.attributes;
  return (
    <div className="flex ">
      <div className="flex-auto">
        {contentSections?.map((content) => dynamicSections({ section: content }))}
      </div>
    </div>
  );
}
export const dynamic = "force-static";
