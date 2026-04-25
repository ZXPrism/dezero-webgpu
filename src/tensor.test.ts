import { describe, it, expect } from "vitest";
import { Tensor } from "./tensor";


describe("Tensor Validtion", () => {
    it("Create an empty tensor 1", () => {
        expect(() => { const _ = new Tensor([]); }).toThrow();
    });

    it("Create an empty tensor 2", () => {
        expect(() => { const _ = new Tensor([[]]); }).toThrow();
    });

    it("Create a valid tensor (0d)", () => {
        expect(() => { const _ = new Tensor(1.14514); }).not.toThrow();
    });

    it("Create a valid tensor (2x2 array)", () => {
        expect(() => { const _ = new Tensor([[1.0, 4.0], [2.0, 3.0]]); }).not.toThrow();
    });

    it("Create a valid tensor (3x2 array)", () => {
        expect(() => { const _ = new Tensor([[1.0, 4.0], [2.0, 3.0], [6.0, 7.0]]); }).not.toThrow();
    });

    it("Create a valid tensor (2x1x1 array)", () => {
        expect(() => { const _ = new Tensor([[[1.0]], [[1.0]]]); }).not.toThrow();
    });

    it("Create an invalid tensor (invalid shape) 1", () => {
        expect(() => { const _ = new Tensor([[1.0, 2.0], 3.0]); }).toThrow();
    });

    it("Create an invalid tensor (invalid shape) 2", () => {
        expect(() => { const _ = new Tensor([[1.0], [[6.0]]]); }).toThrow();
    });

    it("Create an invalid tensor (invalid shape) 3", () => {
        expect(() => { const _ = new Tensor([[1.0, 5.0], [[6.0]]]); }).toThrow();
    });

    it("Create an invalid tensor (empty array at depth)", () => {
        expect(() => { const _ = new Tensor([[], []]); }).toThrow();
    });
});
