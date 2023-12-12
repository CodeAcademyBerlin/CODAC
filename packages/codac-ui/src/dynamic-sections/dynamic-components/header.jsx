export const SectionHeader = ({ data }) => {
    return (<div className="mb-8 space-y-1.5">
      <div className="text-secondary text-center text-3xl font-bold leading-snug">{data.title}</div>
      <div className="text-md text-center leading-snug text-gray-100">{data.subtitle}</div>
    </div>);
};
