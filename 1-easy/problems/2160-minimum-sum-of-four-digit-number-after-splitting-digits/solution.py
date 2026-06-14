class Solution:
    def minimumSum(self, num):
        """
        :type num: int
        :rtype: int
        """
        def inplace_counting_sort(nums, reverse=False):  # Time: O(n)
            count = [0]*(max(nums)+1)
            for num in nums:
                count[num] += 1
            for i in range(1, len(count)):
                count[i] += count[i-1]
            for i in reversed(range(len(nums))):  # inplace but unstable sort
                while nums[i] >= 0:
                    count[nums[i]] -= 1
                    j = count[nums[i]]
                    nums[i], nums[j] = nums[j], ~nums[i]
            for i in range(len(nums)):
                nums[i] = ~nums[i]  # restore values
            if reverse:  # unstable sort
                nums.reverse()
    
        nums = map(int, list(str(num)))
        inplace_counting_sort(nums)
        a = b = 0
        for x in nums:
            a = a*10+x
            a, b = b, a
        return a+b


# greedy
class Solution2(object):
    def minimumSum(self, num):
        """
        :type num: int
        :rtype: int
        """
        nums = sorted(map(int, list(str(num))))
        a = b = 0
        for x in nums:
            a = a*10+x
            a, b = b, a
        return a+b
