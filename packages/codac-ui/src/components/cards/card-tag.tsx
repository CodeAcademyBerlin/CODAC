export const CardTag = ({ tag }: { tag: string }) => {
  console.log("tag", tag)
  return (
    <div className="bg-primary rounded px-2 text-xs font-medium leading-5 text-black">{tag}</div>
  );
};
