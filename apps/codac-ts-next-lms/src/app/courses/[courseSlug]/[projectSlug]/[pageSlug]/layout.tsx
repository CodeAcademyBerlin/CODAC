// import { ClickCounter } from '#/ui/click-counter';
import { Boundary, TabGroup } from "codac-ui";

export default function Layout({
  children,
  params,
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
