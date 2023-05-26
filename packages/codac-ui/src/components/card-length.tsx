export const CardLength = ({ length }: { length: number }) => {
  return (
    <div className="text-sm text-gray-300">
      <strong className="font-bold text-gray-100">{length} Months</strong>
    </div>
  );
};
