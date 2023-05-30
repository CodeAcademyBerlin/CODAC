interface Page {
  __typename?: "Page";
  category?: Maybe<Enum_Page_Category>;
  contentSections?: PageContentSectionsDynamicZone[];
  createdAt?: Maybe<Scalars["DateTime"]>;
  locale?: Maybe<Scalars["String"]>;
  localizations?: Maybe<PageRelationResponseCollection>;
  data: ComponentMetaMetadata;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  slug?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
}
export interface PageEntity {
  __typename?: "PageEntity";
  attributes: Page;
  id: string;
}
export type PageContentSectionsDynamicZone = ComponentSectionsHeader | ComponentSectionsRichText;

interface ComponentSectionsRichText {
  __component: "sections.rich-text";
  content?: Maybe<Scalars["String"]>;
  id: string;
}
interface ComponentSectionsHeader {
  __component: "sections.header";
  id: string;
  subtitle?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
}
