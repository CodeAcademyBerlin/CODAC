import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export const markdownProcessor = async (content: string) => {
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .use(rehypeStringify)
    .process(content);
  const contentHtml = processedContent.toString();
  return contentHtml;
};
