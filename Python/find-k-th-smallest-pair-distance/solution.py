from typing import List

class Solution:
    def smallestDistancePair(self, nums: List[int], k: int) -> int:
        nums.sort()
        n = len(nums)
        
        def count_less_equal(mid):
            count = 0
            l = 0
            for r in range(n):
                while nums[r] - nums[l] > mid:
                    l += 1
                count += r - l
            return count

        low = 0
        high = nums[-1] - nums[0]
        while low < high:
            mid = (low + high) // 2
            if count_less_equal(mid) >= k:
                high = mid
            else:
                low = mid + 1
        return low

def test_solution():
    sol = Solution()
    assert sol.smallestDistancePair([1, 3, 1], 1) == 0
    assert sol.smallestDistancePair([1, 1, 1], 2) == 0
    assert sol.smallestDistancePair([1, 6, 1], 3) == 5
    print("Tests passed")

if __name__ == "__main__":
    test_solution()
