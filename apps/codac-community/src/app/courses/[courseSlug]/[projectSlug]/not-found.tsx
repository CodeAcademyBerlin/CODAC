import { Boundary } from "codac-ui";

export default function NotFound() {
  return (
    <Boundary labels={["projects"]} color="pink">
      <div className="text-vercel-pink space-y-3">
        {/* <h2 className="text-lg font-bold">No pages we found in this project</h2> */}

        <p className="text-sm">Page not found</p>
      </div>
    </Boundary>
  );
}
