from typing import List


class Solution:
    def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        window_sum = sum(nums[:k])
        sums = [0] * (n - k + 1)
        sums[0] = window_sum
        for i in range(1, n - k + 1):
            window_sum += nums[i + k - 1] - nums[i - 1]
            sums[i] = window_sum

        left = [0] * len(sums)
        best = 0
        for i in range(len(sums)):
            if sums[i] > sums[best]:
                best = i
            left[i] = best

        right = [0] * len(sums)
        best = len(sums) - 1
        for i in range(len(sums) - 1, -1, -1):
            if sums[i] >= sums[best]:
                best = i
            right[i] = best

        result = [-1, -1, -1]
        best_total = -1
        for middle in range(k, len(sums) - k):
            l = left[middle - k]
            r = right[middle + k]
            total = sums[l] + sums[middle] + sums[r]
            if total > best_total:
                best_total = total
                result = [l, middle, r]

        return result


if __name__ == "__main__":
    solution = Solution()

    assert solution.maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2) == [0, 3, 5]
    assert solution.maxSumOfThreeSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1], 2) == [0, 2, 4]

    print("All tests passed!")
