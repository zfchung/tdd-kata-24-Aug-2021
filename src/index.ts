export function add(input: string): number {
  const value = input ? input : "0";
  const valueList = value.split(",");
  const numberedValueList = valueList.map(Number);
  const summedValue = sumListItems(numberedValueList);
  return summedValue;
}
function sumListItems(numberedValueList: number[]) {
  return numberedValueList.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
