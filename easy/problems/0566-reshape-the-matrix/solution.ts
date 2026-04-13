function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    const rows = mat.length;
    const cols = mat[0].length;
    if (rows * cols !== r * c) {
        return mat;
    }

    const result = Array.from({ length: r }, () => new Array<number>(c));
    for (let index = 0; index < rows * cols; index++) {
        result[Math.floor(index / c)][index % c] = mat[Math.floor(index / cols)][index % cols];
    }
    return result;
}
