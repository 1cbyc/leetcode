function removeElement(nums: number[], val: number): number {
    let k = 0;
    for (const n of nums) if (n !== val) nums[k++] = n;
    return k;
}
