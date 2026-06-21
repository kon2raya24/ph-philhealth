import { describe, it, expect } from "vitest";
import { validatePhilHealth } from "../validatephilhealth";

describe("validatePhilHealth", () => {
  it("should be a function", () => {
    expect(typeof validatePhilHealth).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => validatePhilHealth(null as any)).toThrow();
  });
});
