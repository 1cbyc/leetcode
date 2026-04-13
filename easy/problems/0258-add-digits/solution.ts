function addDigits(num: number): number {
    return num === 0 ? 0 : 1 + ((num - 1) % 9);
}
