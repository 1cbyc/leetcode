function summaryRanges(nums: number[]): string[] {
    const result: string[] = [];
    let i = 0;
    while (i < nums.length) {
        const start = nums[i];
        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++;
        }
        const end = nums[i];
        if (start === end) {
            result.push(String(start));
        } else {
            result.push(`${start}->${end}`);
        }
        i++;
    }
    return result;
}
