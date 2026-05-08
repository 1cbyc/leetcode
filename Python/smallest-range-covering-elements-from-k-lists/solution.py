import heapq
from typing import List

class Solution:
    def smallestRange(self, nums: List[List[int]]) -> List[int]:
        min_heap = []
        max_val = -float('inf')
        for i in range(len(nums)):
            heapq.heappush(min_heap, (nums[i][0], i, 0))
            max_val = max(max_val, nums[i][0])
            
        ans = [-1000000, 1000000]
        while min_heap:
            min_val, r, c = heapq.heappop(min_heap)
            
            if max_val - min_val < ans[1] - ans[0]:
                ans = [min_val, max_val]
            
            if c + 1 == len(nums[r]):
                break
                
            next_val = nums[r][c+1]
            heapq.heappush(min_heap, (next_val, r, c + 1))
            max_val = max(max_val, next_val)
            
        return ans

def test_solution():
    sol = Solution()
    nums1 = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
    assert sol.smallestRange(nums1) == [20, 24]
    nums2 = [[1,2,3],[1,2,3],[1,2,3]]
    assert sol.smallestRange(nums2) == [1, 1]
    print("Tests passed")

if __name__ == "__main__":
    test_solution()
