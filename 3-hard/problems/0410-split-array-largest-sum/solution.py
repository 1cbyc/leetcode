from typing import List


class Solution:
    def splitArray(self, nums: List[int], k: int) -> int:
        def can_split(limit: int) -> bool:
            chunks = 1
            current = 0
            for value in nums:
                if current + value > limit:
                    chunks += 1
                    current = value
                    if chunks > k:
                        return False
                else:
                    current += value
            return True

        low, high = max(nums), sum(nums)
        while low < high:
            mid = (low + high) // 2
            if can_split(mid):
                high = mid
            else:
                low = mid + 1

        return low


if __name__ == "__main__":
    solution = Solution()

    assert solution.splitArray([7, 2, 5, 10, 8], 2) == 18
    assert solution.splitArray([1, 2, 3, 4, 5], 2) == 9
    assert solution.splitArray([1, 4, 4], 3) == 4

    print("All tests passed!")
