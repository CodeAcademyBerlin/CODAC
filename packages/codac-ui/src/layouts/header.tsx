import { ReactNode } from "react";
export function Header({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-x-3 rounded-lg px-3 py-3 lg:px-5">
      {children}
    </div>
  );
}
