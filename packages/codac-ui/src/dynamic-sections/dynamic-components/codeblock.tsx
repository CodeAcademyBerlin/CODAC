import { Suspense } from "react";

import { codeblockProcessor } from "../prism";

interface ComponentSectionsCodeblock {
  __component: "sections.codeblock";
  code?: string;
  id: string;
}

interface Props {
  data: ComponentSectionsCodeblock;
}

export const SectionCodeblock = ({ data }: Props) => {
  console.log("data", data);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* @ts-expect-error Async Server Component */}
      <Codeblock data={data} />
    </Suspense>
  );
};
const Codeblock = async ({ data }: Props) => {
  const codeblock = await codeblockProcessor(data.code ?? "");
  console.log("codeblock: ", codeblock);
  return (
    <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: codeblock }}></div>
  );
};
