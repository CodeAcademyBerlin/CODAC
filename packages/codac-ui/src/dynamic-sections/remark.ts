import rehypeParse from "rehype-parse";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkToc from "remark-toc";
import { unified } from "unified";

export const markdownProcessor = async (content: string) => {
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(remarkToc)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(content);

  // const processedContent = await unified()
  //    .use(rehypeParse, {fragment: true});
  // .use(remarkParse) // Convert into markdown AST
  // .use(remarkGfm)
  // .use(remarkRehype) // Transform to HTML AST
  // .use(rehypeSanitize) // Sanitize HTML input
  // .use(rehypeStringify) // Convert AST into serialized HTML
  // .process(content);
  const contentHtml = processedContent.toString();
  // console.log("processedContent", processedContent);

  return contentHtml;
};
export const markdownProcessorSync = (content: string) => {
  const processedContent = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(remarkToc)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .processSync(content);

  // const processedContent = await unified()
  //    .use(rehypeParse, {fragment: true});
  // .use(remarkParse) // Convert into markdown AST
  // .use(remarkGfm)
  // .use(remarkRehype) // Transform to HTML AST
  // .use(rehypeSanitize) // Sanitize HTML input
  // .use(rehypeStringify) // Convert AST into serialized HTML
  // .process(content);
  const contentHtml = processedContent.toString();
  // console.log("processedContent", processedContent);

  return contentHtml;
};
// export const markdownProcessor = async (content: string) => {
//   const processedContent = await unified()
//     .use(remarkParse) // Convert into markdown AST
//     .use(remarkGfm)
//     .use(remarkRehype) // Transform to HTML AST
//     .use(rehypeSanitize) // Sanitize HTML input
//     .use(rehypeStringify) // Convert AST into serialized HTML
//     .process(content);
//   console.log("processedContent", processedContent);
//   const contentHtml = processedContent.toString();

//   return contentHtml;
// };
