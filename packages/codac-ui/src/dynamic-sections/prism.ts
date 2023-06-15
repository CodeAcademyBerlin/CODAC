// // you have to load css manual
// import "prismjs/themes/prism-coy.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

// // load languages manual
// import "prismjs/components/prism-python";
// import "prismjs/components/prism-typescript";
// import "prismjs/components/prism-javascript";
// import "prismjs/components/prism-jsx";
// import "prismjs/components/prism-tsx";
// import "prismjs/components/prism-json";
// import "prismjs/components/prism-markdown";
// import "prismjs/components/html";
import rehypePrism from "rehype-prism";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export const codeblockProcessor = async (content: string) => {
  // parse markdown to html
  console.log("content", content);
  const processed = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    // it should be after rehype
    .use(rehypePrism, { plugins: ["line-numbers"] })
    .use(rehypeStringify)
    .process(content);
  // .processSync(/* markdown string */)
  console.log("processed", processed);
  return processed.toString();
  // parse code block in html string
  // rehype().use(rehypePrism).use(rehypeStringify).parse(/* html string */);
  // .processSync(/* html string */)
};
