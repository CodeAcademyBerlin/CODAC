import { Boundary } from "codac-ui";

export default function NotFound() {
  return (
    <Boundary labels={["projects"]} color="pink">
      <div className="text-codac-pink space-y-3">
        <p className="text-sm">Page not found</p>
      </div>
    </Boundary>
  );
}
