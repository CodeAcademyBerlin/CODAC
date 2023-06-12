interface ComponentSectionsRichText {
  __component: "sections.rich-text";
  content?: string;
  id: string;
}

interface Props {
  data: ComponentSectionsRichText;
}

export const SectionMarkdown = ({ data }: Props) => {
  return <article className="prose  dark:prose-invert max-w-none">{data.content}</article>;
  // return <article className="prose prose-neutral w-100">{data.content}</article>;
};
