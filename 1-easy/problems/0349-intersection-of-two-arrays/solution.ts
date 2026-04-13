function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1);
    const result: number[] = [];

    for (const num of nums2) {
        if (set1.has(num)) {
            result.push(num);
            set1.delete(num);
        }
    }

    return result;
}
