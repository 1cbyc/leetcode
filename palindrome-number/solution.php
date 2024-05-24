class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        # Step 1: Handle negative numbers
        if x < 0:
            return False
        
        # Step 2: Initialize variables
        original = x
        reversed_number = 0
        
        # Step 3: Reverse the number
        while x > 0:
            last_digit = x % 10
            reversed_number = reversed_number * 10 + last_digit
            x = x // 10
        
        # Step 4: Compare the original number with the reversed number
        return original == reversed_number

# executing the examples:
solution = Solution()
print(solution.isPalindrome(121))  # Output: True
print(solution.isPalindrome(-121)) # Output: False
print(solution.isPalindrome(10))   # Output: False
