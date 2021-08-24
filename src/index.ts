export function add(input: string): number {
  const value = input ? input : "0";
  return parseInt(value);
}
