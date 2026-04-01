import { describe, test, expect } from "vitest";
import { calculateExpression } from "/Users/aryan/Desktop/Fourth Year/Sem 1/FIT3170/tutorials/tutorials/src/App.tsx";

describe("Multiplication", () => {
  test("handles multiplication", () => {
    expect(calculateExpression("4*5")).toBe("20");
  });
});

describe("Division", () => {
  test("handles division", () => {
    expect(calculateExpression("20/4")).toBe("5");
  });
});

describe("Addition", () => {
  test("handles addition", () => {
    expect(calculateExpression("2+3")).toBe("5");
  });
});

describe("Subtraction", () => {
  test("handles subtraction", () => {
    expect(calculateExpression("10-4")).toBe("6");
  });
});
