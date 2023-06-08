import { Suspense } from "react";

import { markdownProcessor } from "../remark";

interface ComponentSectionsRichText {
  __component: "sections.rich-text";
  content?: string;
  id: string;
}

interface Props {
  data: ComponentSectionsRichText;
}

export const SectionMarkdown = ({ data }: Props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* @ts-expect-error Async Server Component */}
      <Markdown data={data} />
    </Suspense>
  );
};
const Markdown = async ({ data }: Props) => {
  const markdown = await markdownProcessor(data.content ?? "");
  return (
    <article
      className="prose dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: markdown }}
    ></article>
  );
};
