class NumArray {
    private prefix: number[];

    constructor(nums: number[]) {
        this.prefix = [0];
        for (const num of nums) {
            this.prefix.push(this.prefix[this.prefix.length - 1] + num);
        }
    }

    sumRange(left: number, right: number): number {
        return this.prefix[right + 1] - this.prefix[left];
    }
}
