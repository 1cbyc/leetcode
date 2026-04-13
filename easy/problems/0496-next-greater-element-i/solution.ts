function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const nextGreater = new Map<number, number>();
    const stack: number[] = [];

    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        }
        nextGreater.set(nums2[i], stack.length > 0 ? stack[stack.length - 1] : -1);
        stack.push(nums2[i]);
    }

    return nums1.map(num => nextGreater.get(num)!);
}
