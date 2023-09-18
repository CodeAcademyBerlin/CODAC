import { Suspense } from "react";

import { markdownProcessor, markdownProcessorSync } from "../remark";

interface ComponentSectionsRichText {
  __component: "sections.rich-text";
  content?: string;
  id: string;
}

interface Props {
  data: ComponentSectionsRichText;
}

// Can only be used as async server component in Next.js app router
export const SectionMarkdownAsync = ({ data }: Props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* @ts-expect-error Async Server Component */}
      <MarkdownAsync data={data} />
    </Suspense>
  );
};
export const SectionMarkdownSync = ({ data }: Props) => {
  return <MarkdownSync data={data} />;
};

const MarkdownAsync = async ({ data }: Props) => {
  const markdown = await markdownProcessor(data.content ?? "");
  return (
    <article
      className="prose dark:prose-invert max-w-none overflow-auto"
      dangerouslySetInnerHTML={{ __html: markdown }}
    ></article>
  );
};
const MarkdownSync = ({ data }: Props) => {
  const markdown = markdownProcessorSync(data.content ?? "");
  return (
    <article
      className="prose dark:prose-invert max-w-none overflow-auto"
      dangerouslySetInnerHTML={{ __html: markdown }}
    ></article>
  );
};
