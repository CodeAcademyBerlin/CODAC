import { SectionGoogleSlide } from "./goole-slide";
import { SectionHeader } from "./header";
import { SectionMarkdown } from "./markdown";
import type { PageContentSectionsDynamicZone } from "./page";

export function dynamicSections({ section }: { section: PageContentSectionsDynamicZone }) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  switch (section.__component) {
    case "sections.rich-text":
      return <SectionMarkdown data={section} />;
    case "sections.header":
      return <SectionHeader data={section} />;
    case "sections.google-slide":
      return <SectionGoogleSlide data={section} />;
    default:
      return <p>{`unknown section`} </p>;
  }
}
