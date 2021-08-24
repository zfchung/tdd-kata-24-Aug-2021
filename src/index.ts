export function add(input: string): number {
  const value = input ? input : "0";
  const isCustomDelimiter = value.startsWith("//");
  const cleanValue = isCustomDelimiter ? value.split("\n")[1] : value;
  const delimiter = isCustomDelimiter ? value.charAt(2) : "\n";
  const standardDelimiterValue = cleanValue.replaceAll(delimiter, ",");
  const valueList = standardDelimiterValue.split(",");
  const numberedValueList = valueList.map(Number);
  const hasNegative = numberedValueList.some((value) => value < 0);
  if (hasNegative) {
    const negativeValue = numberedValueList
      .filter((value) => value < 0)
      .join(",");
    throw "Negative not allowed: " + negativeValue;
  }
  const summedValue = sumListItems(numberedValueList);
  return summedValue;
}

function sumListItems(numberedValueList: number[]) {
  return numberedValueList.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
