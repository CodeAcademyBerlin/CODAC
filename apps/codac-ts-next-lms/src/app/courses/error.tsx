"use client";

import { Boundary, Button } from "codac-ui";
import React from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  React.useEffect(() => {
    console.log("logging error:", error);
  }, [error]);

  return (
    <Boundary labels={["./error.tsx"]} color="pink">
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Error</h2>
        <p className="text-sm">{error.message}</p>
        <div>
          <Button
            onClick={() => {
              reset();
            }}
          >
            Try Again
          </Button>
        </div>
      </div>
    </Boundary>
  );
}
