import {
  SectionCodeblock,
  SectionGoogleSlide,
  SectionHeader,
  SectionMarkdownAsync,
} from "codac-ui";

import type { PageContentSectionsDynamicZone } from "#/types/page";

export function dynamicSections({ section }: { section: PageContentSectionsDynamicZone }) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  switch (section.__component) {
    case "sections.rich-text":
      return <SectionMarkdownAsync data={section} />;
    case "sections.codeblock":
      return <SectionCodeblock data={section} />;
    case "sections.header":
      return <SectionHeader data={section} />;
    case "sections.google-slide":
      return <SectionGoogleSlide data={section} />;
    default:
      return <p>{`unknown section`} </p>;
  }
}
