function thirdMax(nums: number[]): number {
    const unique = new Set(nums);

    if (unique.size < 3) {
        return Math.max(...unique);
    }

    const sorted = Array.from(unique).sort((a, b) => b - a);
    return sorted[2];
}
