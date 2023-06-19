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
    <div className="mb-8 space-y-1.5">
      <div className="text-codac-orange text-center text-3xl font-bold leading-snug">
        {data.title}
      </div>
      <div className="text-md text-center leading-snug text-gray-100">{data.subtitle}</div>
    </div>
  );
};
