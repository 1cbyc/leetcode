function hammingDistance(x: number, y: number): number {
    const xor = x ^ y;
    return (xor.toString(2).match(/1/g) || []).length;
}
