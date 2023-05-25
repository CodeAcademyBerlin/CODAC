import { resolve } from "node:path";

import fs from "fs";

const regexPatternsGenericArray = (property) => {
  // replace property by key and tranform to "$1 :$2"
  const template = ".*(property): Array<(.*)>;(.*)";
  return {
    from: template.replace(/property/, property),
    to: "$1: $2;",
  };
};
const regexPatternsGenericMaybe = (property) => {
  // replace property by key and tranform to "$1 :$2"
  const template = ".*(property)\\?: Maybe<(.*)>;(.*)";
  return {
    from: template.replace(/property/, property),
    to: "$1: $2;",
  };
};

const regexPatternId = {
  from: "id\\?: Maybe<Scalars\\['ID'\\]>",
  to: "id: string",
  // to: "id: ['ID']",
};
const regexPatternIdop = {
  from: "id\\?: Maybe<Scalars\\['ID'\\]>",
  to: "id: string;",
  // to: "id: ['ID']",
};

// const editTypes = () => {
//   const { replaceInFile } = replace;
//   console.log("object");
//   const options = {
//     files: resolve("src", "global", "__generated__", "types.ts"),
//     from: regexPatterns.generic.from,
//     to: regexPatterns.generic.to,
//   };
//   console.log("options", options);
//   replaceInFile(options)
//     .then((results) => {
//       console.log("Replacement results:", results);
//     })
//     .catch((error) => {
//       console.error("Error occurred:", error);
//     });
// try {
//   const results = await replaceInFile(options);
//   console.log("Replacement results:", results);
//   return results;
// } catch (error) {
//   console.error("Error occurred:", error);
//   return error;
// }
// };

const main = () => {
  const path = resolve("src", "__generated__", "schema.ts");
  const propertiesMaybe = ["attributes", "data"];
  const propertyPaternsMaybe = propertiesMaybe.map((property) =>
    regexPatternsGenericMaybe(property)
  );
  // const propertiesArray = ["data"];
  // const propertyPaternsArray = propertiesArray.map((property) =>
  //   regexPatternsGenericArray(property)
  // );
  // const patterns = [...propertyPaterns];
  const patterns = [...propertyPaternsMaybe, regexPatternId];
  const file = fs.readFileSync(path, "utf8");
  const replaceMatched = patterns.reduce((acc, pattern) => {
    const regex = new RegExp(pattern.from, "g");
    console.log("from", regex);
    return acc.replaceAll(regex, pattern.to);
  }, file);

  fs.writeFileSync(path, replaceMatched);
};

main();
