export function add(input: string): number {
  const value = input ? input : "0";
  const valueList = value.split(",");
  const numberedValueList = valueList.map(Number);
  const summedValue =
    numberedValueList[0] + (numberedValueList[1] ? numberedValueList[1] : 0);
  return summedValue;
}
