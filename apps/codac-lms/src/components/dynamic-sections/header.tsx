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
  return (
    <div className="flex space-y-1.5">
      <div className="text-secondary text-center text-2xl font-bold leading-snug">{data.title}</div>
      <div className="text-sm leading-snug text-white"></div>
    </div>
  );
};
