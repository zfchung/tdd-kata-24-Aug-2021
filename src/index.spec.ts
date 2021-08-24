import { add } from "./index";

describe("Test add function", () => {
  it("should return 0 when input is an empty string", () => {
    expect(add("")).toEqual(0);
  });
  it("should return the sum of 1 number", () => {
    expect(add("1")).toEqual(1);
  });
  it("should return the sum of 2 numbers", () => {
    expect(add("1,2")).toEqual(3);
  });
  it("should return sum of unknown amount of numbers", () => {
    expect(add("1,2,3,4,5,6")).toEqual(21);
  });
  it("should allow '\n' and ',' as delimiters", () => {
    expect(add("1\n2,3")).toEqual(6);
  });
  it("should allow custom delimiters", () => {
    expect(add("//;\n1;2;3")).toEqual(6);
  });
});
