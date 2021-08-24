import { add } from "./index";

describe("Test add function", () => {
  it("should return 0 when input is an empty string", () => {
    expect(add("")).toEqual(0);
  });
  it("should return the sum of 1 number", () => {
    expect(add("1")).toEqual(1);
  });
});
