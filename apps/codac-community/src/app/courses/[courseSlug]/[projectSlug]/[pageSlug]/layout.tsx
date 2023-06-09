// import { ClickCounter } from '#/ui/click-counter';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  params: {
    projectSlug: string;
    courseSlug: string;
    pageSlug: string;
  };
}) {
  return <div className="space-y-9">{children}</div>;
}
