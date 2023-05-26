interface ComponentSectionsHeader {
  __component: "sections.header";
  id: string;
  subtitle?: string;
  title?: string;
}
interface Props {
  data: ComponentSectionsHeader;
}

export const SectionHeader = ({ data }: Props) => {
  console.log("Header", data);
  return (
    <>
      <h1>Title: {data.title}</h1>
      <p>Subtitle: {data.subtitle}</p>
    </>
  );
};
