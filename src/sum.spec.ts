import { MathUtil } from "./MathUtil";

describe("sum", () => {
  it("sums two numbers", () => {
    expect(MathUtil.sum(1, 2)).toEqual(3);
  });
});
