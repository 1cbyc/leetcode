from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def answerQueries(self, nums, queries):
        """
        :type nums: List[int]
        :type queries: List[int]
        :rtype: List[int]
        """
        nums.sort()
        for i in range(len(nums)-1):
            nums[i+1] += nums[i]
        return [bisect.bisect_right(nums, q) for q in queries]
