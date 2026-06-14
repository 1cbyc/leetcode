PALINDROME_ROOTS: list[int] = []
for value in range(1, 10**5 + 1):
    prefix = str(value)
    PALINDROME_ROOTS.append(int(prefix + prefix[::-1]))
    PALINDROME_ROOTS.append(int(prefix + prefix[:-1][::-1]))


class Solution:
    def superpalindromesInRange(self, left: str, right: str) -> int:
        lower = int(left)
        upper = int(right)
        count = 0

        for root in PALINDROME_ROOTS:
            square = root * root
            if square > upper:
                continue
            if square >= lower and self._is_palindrome(square):
                count += 1

        return count

    def _is_palindrome(self, value: int) -> bool:
        reversed_value = 0
        current = value
        while current:
            reversed_value = reversed_value * 10 + current % 10
            current //= 10
        return value == reversed_value


if __name__ == "__main__":
    solution = Solution()

    assert solution.superpalindromesInRange("4", "1000") == 4
    assert solution.superpalindromesInRange("1", "2") == 1
    assert solution.superpalindromesInRange("1", "1") == 1
    assert solution.superpalindromesInRange("676", "676") == 0

    print("All tests passed!")
