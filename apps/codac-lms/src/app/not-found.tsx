import { Boundary } from "codac-ui";

export default function NotFound() {
  return (
    <Boundary labels={["not-found.tsx"]} color="pink">
      <div className="text-codac-pink space-y-4">
        <h2 className="text-lg font-bold">Not Found</h2>

        <p className="text-sm">Could not find requested resource</p>
      </div>
    </Boundary>
  );
}
