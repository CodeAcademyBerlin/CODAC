export function Button({
  color = "pink",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "pink" | "blue" | "violet" | "cyan" | "orange";
}) {
  return (
    <button
      name="button"
      className={`cursor-pointer rounded-lg border-2 border-codac-${color} px-3 py-2 hover:border-gray-100 hover:text-gray-100 text-codac-${color}`}
      {...props}
    />
  );
}
