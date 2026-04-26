import _ from "lodash";


export type NDArray = number | NDArray[];

export class Tensor {
    private _data: NDArray;
    private _shape: number[];

    constructor(data: NDArray) {
        const [is_valid, shape] = validate_data(data);
        if (!is_valid) {
            throw new Error(`Invalid tensor data`);
        }
        this._data = data;
        this._shape = shape;
    }

    get shape() {
        return this._shape;
    }

    get ndim() {
        return this._shape.length;
    }
}

function validate_data(data: NDArray): [boolean, number[]] {
    function get_shape(x: NDArray): [boolean, number[]] {
        if (typeof x === "number") {
            return [true, []];
        }
        const [is_shape_valid, first_elem_shape] = get_shape(x[0]);
        if (!is_shape_valid) {
            return [false, []];
        }
        for (const elem of x) {
            const [is_curr_shape_valid, curr_shape] = get_shape(elem);
            if (!is_curr_shape_valid || !_.isEqual(first_elem_shape, curr_shape)) {
                return [false, []];
            }
        }
        first_elem_shape.push(x.length);
        return [true, first_elem_shape];
    }

    const [is_valid, shape] = get_shape(data);
    shape.reverse();
    return [is_valid, shape];
}
