export interface Move {
    x?: number;
    y?: number;
    sign?: shape_sign,
    index: number,
    label:string
}

type shape_sign = 'X' | 'O'