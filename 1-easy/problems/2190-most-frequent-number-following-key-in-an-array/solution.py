from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def mostFrequent(self, nums, key):
        """
        :type nums: List[int]
        :type key: int
        :rtype: int
        """
        return collections.Counter(nums[i+1] for i in range(len(nums)-1) if nums[i] == key).most_common(1)[0][0]
