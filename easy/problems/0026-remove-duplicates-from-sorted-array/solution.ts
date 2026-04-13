function removeDuplicates(nums: number[]): number {
    let k = 1;
    for (let i = 1; i < nums.length; i++)
        if (nums[i] !== nums[i-1]) nums[k++] = nums[i];
    return k;
}
