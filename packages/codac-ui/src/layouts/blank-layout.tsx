export function BlankLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen flex-col  items-center justify-center overflow-hidden">
      {children}
    </div>
  );
}
