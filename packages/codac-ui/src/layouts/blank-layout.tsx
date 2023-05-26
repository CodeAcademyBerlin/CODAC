export function BlankLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center">
      {children}
    </div>
  );
}
