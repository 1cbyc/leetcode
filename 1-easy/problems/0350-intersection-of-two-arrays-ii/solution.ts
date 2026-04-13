function intersect(nums1: number[], nums2: number[]): number[] {
    const count = new Map<number, number>();

    for (const num of nums1) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    const result: number[] = [];
    for (const num of nums2) {
        if (count.has(num) && count.get(num)! > 0) {
            result.push(num);
            count.set(num, count.get(num)! - 1);
        }
    }

    return result;
}
