export function Button({
  color = "pink",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "pink" | "blue" | "violet" | "cyan" | "orange";
}) {
  return (
    <button
      className={`cursor-pointer rounded-lg border-2 border-codac-${color} px-3 py-2 text-gray-100 hover:bg-codac-${color} hover:text-codac-${color}`}
      {...props}
    />
  );
}
