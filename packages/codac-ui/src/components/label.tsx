import clsx from "clsx";

export const Label = ({
  children,
  animateRerendering,
  color,
}: {
  children: React.ReactNode;
  animateRerendering?: boolean;
  color?: "default" | "pink" | "blue" | "violet" | "cyan" | "orange";
}) => {
  return (
    <div
      className={clsx("rounded-full px-1.5 shadow-[0_0_1px_3px_black]", {
        "bg-gray-800 text-gray-300": color === "default",
        "bg-codac-pink text-white": color === "pink",
        "bg-codac-blue text-white": color === "blue",
        "bg-codac-cyan text-white": color === "cyan",
        "bg-codac-violet text-violet-100": color === "violet",
        "bg-codac-orange text-white": color === "orange",
        "animate-[highlight_1s_ease-in-out_1]": animateRerendering,
      })}
    >
      {children}
    </div>
  );
};
