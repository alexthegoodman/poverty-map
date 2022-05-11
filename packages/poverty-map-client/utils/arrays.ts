import { MapTestData } from "../def";

export const enumToArray = (enumObj: any) => {
  let arr: string[] = [];
  Object.keys(enumObj).forEach((prop: any) => {
    if (typeof enumObj[prop] === "string") {
      arr[prop] = enumObj[prop];
    }
  });
  return arr;
};

export const getTotals = (
  data: MapTestData[],
  property: string,
  value: string
) => {
  const total = data.reduce(
    (acc: number, curr: any) => (curr[property] === value ? acc + 1 : acc),
    0
  );
  return total;
};
