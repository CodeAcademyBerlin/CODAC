// buggy on redirects and crfs sucurity so not in use for now
import { SignIn } from "codac-ui";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-md">
        <SignIn />
      </div>
    </div>
  );
};
export default SignInPage;