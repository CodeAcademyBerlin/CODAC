interface ComponentSectionsRichText {
  __component: "sections.rich-text";
  content?: string;
  id: string;
}

interface Props {
  data: ComponentSectionsRichText;
}

export const SectionMarkdown = ({ data }: Props) => {
  console.log("Markdown", data);
  return <article className="prose prose-slate">{data.content || ""}</article>;
};
