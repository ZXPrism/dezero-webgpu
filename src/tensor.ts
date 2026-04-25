type NDArray = number | NDArray[];

export class Tensor {
    public data: NDArray;

    constructor(data: NDArray) {
        if (!this._validate_data(data)) {
            throw new Error(`Invalid tensor data`);
        }
        this.data = data;
    }

    private _validate_data(data: NDArray): boolean {
        const is_same_shape = (a: number[], b: number[]) =>
            a.length === b.length && a.every((v, i) => v === b[i]);

        function get_shape(x: NDArray): [boolean, number[]] {
            if (typeof x === "number") {
                return [true, [0]];
            }
            const [is_shape_valid, first_elem_shape] = get_shape(x[0]);
            if (!is_shape_valid) {
                return [false, [-1]];
            }
            for (const elem of x) {
                const [is_curr_shape_valid, curr_shape] = get_shape(elem);
                if (!is_curr_shape_valid || !is_same_shape(first_elem_shape, curr_shape)) {
                    return [false, [-1]];
                }
            }
            first_elem_shape.push(x.length);
            return [true, first_elem_shape];
        }

        const [is_shape_valid, _] = get_shape(data);
        return is_shape_valid;
    }
}
