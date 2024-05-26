from sortedcontainers import SortedList

class Solution:
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
        result = []
        window = SortedList(nums[:k])
        n = len(nums)
        
        def median(window):
            if k % 2 == 0:
                return (window[k // 2 - 1] + window[k // 2]) / 2
            else:
                return window[k // 2]
        
        result.append(median(window))
        
        for i in range(k, n):
            window.remove(nums[i - k])
            window.add(nums[i])
            result.append(median(window))
        
        return result
