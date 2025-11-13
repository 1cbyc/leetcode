class Solution(object):
    def isPalindrome(self, x):
        if x < 0:
            return False
        
        original = x
        reversed_number = 0
        
        while x > 0:
            last_digit = x % 10
            reversed_number = reversed_number * 10 + last_digit
            x = x // 10
        
        return original == reversed_number

solution = Solution()
print(solution.isPalindrome(121))
print(solution.isPalindrome(-121))
print(solution.isPalindrome(10))
