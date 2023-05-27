import type { ReactNode } from "react";

export const CardShiny = ({ header, subheader }: { header: string; subheader: string }) => {
  return (
    <div className="relative max-w-md overflow-hidden rounded-xl border border-slate-900 bg-zinc-950 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
      <span className="mb-4 inline-flex items-center justify-center rounded-md bg-blue-600 p-2 shadow-lg"></span>
      <h3 className="mb-2 font-medium tracking-tight text-white">{header}</h3>
      <p className="text-sm text-slate-400">{subheader}</p>
    </div>
  );
};
export const CardShinyHOC = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-900 bg-zinc-950 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
      {children}
    </div>
  );
};
