import { RenderingPageSkeleton } from "codac-ui";

export default function Loading() {
  return (
    <div className="flex">
      <div className="flex-auto">
        <RenderingPageSkeleton />
      </div>
    </div>
  );
}
