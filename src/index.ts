export function add(input: string): number {
  const value = input ? input : "0";
  const valueList = value.split(",");
  const numberedValueList = valueList.map(Number);
  const summedValue = numberedValueList.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return summedValue;
}
