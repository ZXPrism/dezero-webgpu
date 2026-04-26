import { it, expect } from "vitest";
import { dezero } from "./dezero";

it("tensor", () => {
    expect(() => { dezero.tensor([1.0, 2.0, 3.0]); }).not.toThrow();
});

it("zeros", () => {
    expect(() => { dezero.zeros([1, 3, 5, 7]); }).not.toThrow();
});

it("ones", () => {
    expect(() => { dezero.ones([12, 34]); }).not.toThrow();
});
