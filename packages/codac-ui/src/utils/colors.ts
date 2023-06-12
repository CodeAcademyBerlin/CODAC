/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

// TODO / fix types
export const themeColorsFlat = (tailwindColors: {
  codac: Record<string, unknown> | ArrayLike<unknown>;
}) => {
  let category = "";

  const flattenObject = (obj: Record<string, any>) => {
    const flattened: Record<string, string> = {};
    Object.keys(obj).map((key) => {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        category = key;
        Object.assign(flattened, flattenObject(obj[key]));
      } else {
        return (flattened[`${category}-${key}`] = obj[key]);
      }
    });
    return flattened;
  };
  const colorObj = flattenObject(tailwindColors);
  return Object.keys(colorObj).map((key) => {
    return {
      name: key,
      value: colorObj[key],
    };
  });
};
