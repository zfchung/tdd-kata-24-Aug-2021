export function add(input: string): number {
  const value = input ? input : "0";
  const numberedValueList = value.split(",").map(Number);
  const sumValueList =
    numberedValueList[0] + (numberedValueList[1] ? numberedValueList[1] : 0);
  return sumValueList;
}
