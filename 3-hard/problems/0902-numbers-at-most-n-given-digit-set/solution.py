from typing import List


class Solution:
    def atMostNGivenDigitSet(self, digits: List[str], n: int) -> int:
        answer = 0
        num = str(n)
        digit_count = len(digits)

        for length in range(1, len(num)):
            answer += digit_count**length

        for index, char in enumerate(num):
            has_same_digit = False
            for digit in digits:
                if digit[0] < char:
                    answer += digit_count ** (len(num) - index - 1)
                elif digit[0] == char:
                    has_same_digit = True
            if not has_same_digit:
                return answer

        return answer + 1


if __name__ == "__main__":
    solution = Solution()

    assert solution.atMostNGivenDigitSet(["1", "3", "5", "7"], 100) == 20
    assert solution.atMostNGivenDigitSet(["1", "4", "9"], 1_000_000_000) == 29523
    assert solution.atMostNGivenDigitSet(["7"], 8) == 1

    print("All tests passed!")
