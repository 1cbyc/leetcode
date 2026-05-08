from typing import List

class Solution:
    def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
        """
        Finds three non-overlapping subarrays of length k with maximum sum.
        Returns the lexicographically smallest list of starting indices.
        
        Complexity:
            Time: O(n) where n is the length of nums.
            Space: O(n) to store the sums of subarrays and left/right max index arrays.
        """
        n = len(nums)
        # 1. Precompute the sum of every subarray of length k
        # sums[i] is the sum of nums[i:i+k]
        sums = [0] * (n - k + 1)
        current_sum = sum(nums[:k])
        sums[0] = current_sum
        for i in range(1, n - k + 1):
            current_sum = current_sum - nums[i - 1] + nums[i + k - 1]
            sums[i] = current_sum

        # 2. Precompute the best index for the first (left) subarray
        # left[i] is the index of the first subarray in sums[0...i] with max sum
        m = len(sums)
        left = [0] * m
        best_idx = 0
        for i in range(m):
            if sums[i] > sums[best_idx]:
                best_idx = i
            left[i] = best_idx

        # 3. Precompute the best index for the third (right) subarray
        # right[i] is the index of the first subarray in sums[i...m-1] with max sum
        right = [0] * m
        best_idx = m - 1
        # Iterate backwards to find the smallest index in case of ties
        for i in range(m - 1, -1, -1):
            # We use >= to pick the smaller index in case of tie
            # sums[i] is earlier than sums[best_idx]
            if sums[i] >= sums[best_idx]:
                best_idx = i
            right[i] = best_idx

        # 4. Iterate over the middle subarray index 'j'
        # j must have at least k elements before it and k elements after its end
        # So k <= j <= m - 1 - k
        result = [-1, -1, -1]
        max_total_sum = -1
        
        for j in range(k, m - k):
            i = left[j - k]
            l = right[j + k]
            total_sum = sums[i] + sums[j] + sums[l]
            
            # Since we iterate j from smallest to largest and 
            # left/right store the smallest indices, 
            # we only update if total_sum is strictly greater.
            if total_sum > max_total_sum:
                max_total_sum = total_sum
                result = [i, j, l]
                
        return result

def test_solution():
    solution = Solution()
    
    # Example 1
    nums1 = [1, 2, 1, 2, 6, 7, 5, 1]
    k1 = 2
    assert solution.maxSumOfThreeSubarrays(nums1, k1) == [0, 3, 5]
    
    # Example 2
    nums2 = [1, 2, 1, 2, 1, 2, 1, 2, 1]
    k2 = 2
    assert solution.maxSumOfThreeSubarrays(nums2, k2) == [0, 2, 4]
    
    print("All tests passed!")

if __name__ == "__main__":
    test_solution()
