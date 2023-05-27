// import { SectionMarkdown, SectionHeader} from "codac-ui";
// TO DO inverstivate why this its not working from codac-ui
import { SectionHeader } from "#/components/dynamic-sections/header";
import { SectionMarkdown } from "#/components/dynamic-sections/markdown";
import type { PageContentSectionsDynamicZone } from "#/types/page";

export function dynamicSections({ section }: { section: PageContentSectionsDynamicZone }) {
  switch (section.__component) {
    case "sections.rich-text":
      // return <article className="prose prose-slate">{section.content || ""}</article>;
      // return <RichText data={section.content} />;
      return <SectionMarkdown data={section} />;
    case "sections.header":
      // return <p>{section.title}</p>;
      return <SectionHeader data={section} />;
    default:
      return <p>{`unknown section`} </p>;
  }
}
