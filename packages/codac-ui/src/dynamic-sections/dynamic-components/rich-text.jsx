import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
export function SectionRichText({ data: { content } }) {
    // TODO: STYLE THE MARKDOWN
    return (<section className="rich-text py-6 dark:bg-black dark:text-gray-50 ">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </section>);
}
