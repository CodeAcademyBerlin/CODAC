import { Suspense } from "react";
import { markdownProcessor, markdownProcessorSync } from "../remark";
// Can only be used as async server component in Next.js app router
export const SectionMarkdownAsync = ({ data }) => {
    return (<Suspense fallback={<div>Loading...</div>}>
      {/* @ts-expect-error Async Server Component */}
      <MarkdownAsync data={data}/>
    </Suspense>);
};
export const SectionMarkdownSync = ({ data }) => {
    return <MarkdownSync data={data}/>;
};
const MarkdownAsync = async ({ data }) => {
    const markdown = await markdownProcessor(data.content ?? "");
    return (<article className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: markdown }}></article>);
};
const MarkdownSync = ({ data }) => {
    const markdown = markdownProcessorSync(data.content ?? "");
    return (<article className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: markdown }}></article>);
};
