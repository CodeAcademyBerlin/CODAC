// import { SectionMarkdown, SectionHeader} from "codac-ui";
// TO DO inverstivate why this its not working from codac-ui

import { SectionHeader } from "./header";
import { SectionMarkdown } from "./markdown";
import type { PageContentSectionsDynamicZone } from "./page";

export function dynamicSections({ section }: { section: PageContentSectionsDynamicZone }) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  switch (section.__component) {
    case "sections.rich-text":
      // return <RichText data={section.content} />;
      return <SectionMarkdown data={section} />;
    case "sections.header":
      // return <p>{section.title}</p>;
      return <SectionHeader data={section} />;
    default:
      return <p>{`unknown section`} </p>;
  }
}
