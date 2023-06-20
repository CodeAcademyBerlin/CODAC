import clsx from "clsx";

export const TronGrid = ({
  animateRerendering = true,
  color = "default",
}: {
  animateRerendering?: boolean;
  color?: "pink" | "blue" | "violet" | "cyan" | "orange" | "default";
}) => {
  return (
    <div className="perspective-o-50-50 perspective-180 absolute -z-10 h-full w-full">
      <div
        // Tron grid (not compatible with tailwindcss)
        // style={{
        //   backgroundImage:
        //     "-webkit-linear-gradient(#38bcc1 3px, transparent 3px),-webkit-linear-gradient(left, #38bcc1 3px, transparent 3px)",
        // }}
        className={clsx(
          "rotate-x-80 absolute bottom-[-35%] left-[-50%] h-[130%] w-[200%] bg-[length:100px_100px] bg-[-1px_-1px]",
          {
            "bg-[linear-gradient(#38bcc1_3px,transparent_3px)]": color === "default",
            "bg-[linear-gradient(#FF0080_3px,transparent_3px)]": color === "pink",
            "bg-[linear-gradient(#0070F3,transparent_3px)]": color === "blue",
            "bg-[linear-gradient(#50E3C2,transparent_3px)]": color === "cyan",
            "bg-[linear-gradient(#F5A623,transparent_3px)]": color === "orange",
            "bg-[linear-gradient(#7928CA,transparent_3px)]": color === "violet",
            "animate-[planeMove_6s_linear_infinite]": animateRerendering,
          }
        )}
      >
        <div
          className={clsx("h-full w-full", {
            "bg-[linear-gradient(#38bcc1,transparent)]": color === "default",
            "bg-[linear-gradient(#FF0080_3px,transparent)]": color === "pink",
            "bg-[linear-gradient(#0070F3_3px,transparent)]": color === "blue",
            "bg-[linear-gradient(#50E3C2_3px,transparent)]": color === "cyan",
            "bg-[linear-gradient(#F5A623_3px,transparent)]": color === "orange",
            "bg-[linear-gradient(#7928CA_3px,transparent)]": color === "violet",
          })}
        ></div>
      </div>
    </div>
  );
};
// webkit-linear-gradient(left, #38bcc1 3px, transparent 3px
