import "server-only";

export const getData = async () => {
  const dataJson = await import("../data/data.json").then(
    (module) => module.default
  );
  return dataJson;
};
