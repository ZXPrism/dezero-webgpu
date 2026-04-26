import { describe, it, expect } from "vitest";
import { Tensor } from "./tensor";


describe("Tensor Validtion", () => {
    it("should not create an empty tensor 1", () => {
        expect(() => { new Tensor([]); }).toThrow();
    });

    it("should not create an empty tensor 2", () => {
        expect(() => { new Tensor([[]]); }).toThrow();
    });

    it("should not create an empty tensor 3", () => {
        expect(() => { new Tensor([[], []]); }).toThrow();
    });

    it("should create a valid tensor (0d)", () => {
        expect(() => { new Tensor(1.14514); }).not.toThrow();
    });

    it("should create a valid tensor (2x2 array)", () => {
        expect(() => { new Tensor([[1.0, 4.0], [2.0, 3.0]]); }).not.toThrow();
    });

    it("should create a valid tensor (3x2 array)", () => {
        expect(() => { new Tensor([[1.0, 4.0], [2.0, 3.0], [6.0, 7.0]]); }).not.toThrow();
    });

    it("should create a valid tensor (2x1x1 array)", () => {
        expect(() => { new Tensor([[[1.0]], [[1.0]]]); }).not.toThrow();
    });

    it("should not create an invalid tensor (invalid shape) 1", () => {
        expect(() => { new Tensor([[1.0, 2.0], 3.0]); }).toThrow();
    });

    it("should not create an invalid tensor (invalid shape) 2", () => {
        expect(() => { new Tensor([[1.0], [[6.0]]]); }).toThrow();
    });

    it("should not create an invalid tensor (invalid shape) 3", () => {
        expect(() => { new Tensor([[1.0, 5.0], [[6.0]]]); }).toThrow();
    });

    it("should not create an invalid tensor (invalid shape) 4", () => {
        expect(() => { new Tensor([[1.0, [2.0]]]); }).toThrow();
    });
});

describe("Tensor Shapes", () => {
    it("should compute the correct shape of 0D tensor", () => {
        expect(new Tensor(1.0).shape).toEqual([]);
    });

    it("should compute the correct shape of 1D(6) tensor", () => {
        expect(new Tensor([1, 2, 3, 4, 5, 6]).shape).toEqual([6]);
    });

    it("should compute the correct shape of 2D(2x1) tensor", () => {
        expect(new Tensor([[1], [5]]).shape).toEqual([2, 1]);
    });

    it("should compute the correct shape of 3D(3x4x5) tensor", () => {
        expect(new Tensor([
            [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
            [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
            [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
        ]).shape).toEqual([3, 4, 5]);
    });

    it("should compute the correct shape of 10D(1x1x1x1x1x1x1x1x1x2) tensor", () => {
        expect(new Tensor([[[[[[[[[[1, 2]]]]]]]]]]).shape).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 2]);
    });
});

describe("Tensor Dimensions", () => {
    it("should compute the correct dim of 0D tensor", () => {
        expect(new Tensor(1.0).ndim).toEqual(0);
    });

    it("should compute the correct dim of 1D(6) tensor", () => {
        expect(new Tensor([1, 2, 3, 4, 5, 6]).ndim).toEqual(1);
    });

    it("should compute the correct dim of 2D(2x1) tensor", () => {
        expect(new Tensor([[1], [5]]).ndim).toEqual(2);
    });

    it("should compute the correct dim of 3D(3x4x5) tensor", () => {
        expect(new Tensor([
            [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
            [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
            [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
        ]).ndim).toEqual(3);
    });

    it("should compute the correct dim of 10D(1x1x1x1x1x1x1x1x1x2) tensor", () => {
        expect(new Tensor([[[[[[[[[[1, 2]]]]]]]]]]).ndim).toEqual(10);
    });
});

describe("Tensor Utils: zeros", () => {
    it("should create a correct 0D tensor", () => {
        expect(Tensor.zeros([])).toEqual(new Tensor(0));
    });

    it("should create a correct 1D(6) tensor", () => {
        expect(Tensor.zeros([6])).toEqual(new Tensor([0, 0, 0, 0, 0, 0]));
    });

    it("should create a correct 2D(2x3) tensor", () => {
        expect(Tensor.zeros([2, 3])).toEqual(new Tensor([[0, 0, 0], [0, 0, 0]]));
    });

    it("should create a correct 3D(2x3x4) tensor", () => {
        expect(Tensor.zeros([2, 3, 4])).toEqual(new Tensor([
            [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
        ]));
    });
});

describe("Tensor Utils: ones", () => {
    it("should create a correct 0D tensor", () => {
        expect(Tensor.ones([])).toEqual(new Tensor(1));
    });

    it("should create a correct 1D(6) tensor", () => {
        expect(Tensor.ones([6])).toEqual(new Tensor([1, 1, 1, 1, 1, 1]));
    });

    it("should create a correct 2D(2x3) tensor", () => {
        expect(Tensor.ones([2, 3])).toEqual(new Tensor([[1, 1, 1], [1, 1, 1]]));
    });

    it("should create a correct 3D(2x3x4) tensor", () => {
        expect(Tensor.ones([2, 3, 4])).toEqual(new Tensor([
            [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]],
            [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]
        ]));
    });
});
