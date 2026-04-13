function distributeCandies(candyType: number[]): number {
    return Math.min(new Set(candyType).size, Math.floor(candyType.length / 2));
}
