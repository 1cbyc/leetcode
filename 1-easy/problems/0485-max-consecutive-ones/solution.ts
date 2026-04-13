function findMaxConsecutiveOnes(nums: number[]): number {
    let maxCount = 0, currentCount = 0;

    for (const num of nums) {
        if (num === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}
