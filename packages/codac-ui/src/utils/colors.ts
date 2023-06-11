export const themeColorsFlat = (tailwindColors: {
  codac: { [s: string]: unknown } | ArrayLike<unknown>;
}) => {
  let category = "";

  const flattenObject = (obj: { [x: string]: any }) => {
    const flattened: { [x: string]: any } = {};
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
