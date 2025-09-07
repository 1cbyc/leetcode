function splitArray(nums: number[], k: number): number {
    function canSplit(maxSum: number): boolean {
        let currentSum = 0;
        let subarrays = 1;

        for (const num of nums) {
            if (currentSum + num > maxSum) {
                subarrays++;
                currentSum = num;
                if (subarrays > k) return false;
            } else {
                currentSum += num;
            }
        }

        return true;
    }

    let left = Math.max(...nums);
    let right = nums.reduce((sum, num) => sum + num, 0);
    let result = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (canSplit(mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
}

const test1 = [7, 2, 5, 10, 8];
console.log("Test 1:", splitArray(test1, 2));

const test2 = [1, 2, 3, 4, 5];
console.log("Test 2:", splitArray(test2, 2));

const test3 = [1, 4, 4];
console.log("Test 3:", splitArray(test3, 3));
