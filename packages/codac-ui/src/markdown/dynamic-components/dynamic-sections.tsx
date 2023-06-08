// import { SectionMarkdown, SectionHeader} from "codac-ui";
// TO DO inverstivate why this its not working from codac-ui

import { SectionCodeBlock } from "./code-block";
import { SectionGoogleSlide } from "./goole-slide";
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
    case "sections.google-slide":
      return <SectionGoogleSlide data={section} />;
    case "sections.codeblock":
      return <SectionCodeBlock data={section} />;
    default:
      return <p>{`unknown section`} </p>;
  }
}
