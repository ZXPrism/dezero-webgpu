import { Tensor, type NDArray } from "./tensor";

export const dezero = {
    tensor: (data: NDArray) => new Tensor(data),
    zeros: (shape: number[]) => Tensor.zeros(shape),
    ones: (shape: number[]) => Tensor.ones(shape),
};
