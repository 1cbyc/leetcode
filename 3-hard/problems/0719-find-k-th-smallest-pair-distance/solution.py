from typing import List


class Solution:
    def smallestDistancePair(self, nums: List[int], k: int) -> int:
        nums.sort()
        n = len(nums)

        def count_within(limit: int) -> int:
            count = 0
            left = 0
            for right in range(n):
                while nums[right] - nums[left] > limit:
                    left += 1
                count += right - left
            return count

        low, high = 0, nums[-1] - nums[0]
        while low < high:
            mid = (low + high) // 2
            if count_within(mid) >= k:
                high = mid
            else:
                low = mid + 1

        return low


if __name__ == "__main__":
    solution = Solution()

    assert solution.smallestDistancePair([1, 3, 1], 1) == 0
    assert solution.smallestDistancePair([1, 1, 1], 2) == 0
    assert solution.smallestDistancePair([1, 6, 1], 3) == 5

    print("All tests passed!")
