import { add } from "../../src/index";


describe("add function", () => {
  it("1 + 1 = 2", () => {
    expect(add(1, 1)).toEqual(2);
  });
});