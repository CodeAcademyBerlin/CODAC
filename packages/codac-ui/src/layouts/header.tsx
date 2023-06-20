import { ReactNode } from "react";
export function Header({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-x-3 rounded-lg bg-zinc-950 px-3 py-3 lg:px-5 lg:py-4">
      {children}
    </div>
  );
}
