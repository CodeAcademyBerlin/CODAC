import { Suspense } from "react";
import { codeblockProcessor } from "../prism";
export const SectionCodeblock = ({ data }) => {
    console.log("data", data);
    return (<Suspense fallback={<div>Loading...</div>}>
      {/* @ts-expect-error Async Server Component */}
      <Codeblock data={data}/>
    </Suspense>);
};
const Codeblock = async ({ data }) => {
    const codeblock = await codeblockProcessor(data.code ?? "");
    console.log("codeblock: ", codeblock);
    return (<div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: codeblock }}></div>);
};
