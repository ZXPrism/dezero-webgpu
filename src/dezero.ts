import { Tensor, type NDArray } from "./tensor";

export const dezero = {
    tensor: (data: NDArray) => new Tensor(data),
};
