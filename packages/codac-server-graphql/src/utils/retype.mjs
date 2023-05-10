import { resolve } from "node:path";

import pkg from "replace-in-file";

const idNonOptional = () => {
  const { replaceInFile } = pkg;
  console.log("object");
  const options = {
    files: resolve("src", "global", "__generated__", "types.ts"),
    from: /id\?: Maybe<Scalars\['ID'\]>/g,
    to: "id: ['ID']",
  };
  console.log("options", options);
  replaceInFile(options)
    .then((results) => {
      console.log("Replacement results:", results);
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
  // try {
  //   const results = await replaceInFile(options);
  //   console.log("Replacement results:", results);
  //   return results;
  // } catch (error) {
  //   console.error("Error occurred:", error);
  //   return error;
  // }
};
idNonOptional();
export { idNonOptional };
