class Solution:
    def numDupDigitsAtMostN(self, n: int) -> int:
        digits = [int(ch) for ch in str(n + 1)]
        length = len(digits)

        def permutation(m: int, k: int) -> int:
            result = 1
            for i in range(k):
                result *= m - i
            return result

        # Count numbers with all-unique digits, then subtract.
        unique = 0

        # Numbers with fewer digits than n.
        for size in range(1, length):
            unique += 9 * permutation(9, size - 1)

        # Numbers with the same number of digits, bounded by n.
        seen = set()
        for index, digit in enumerate(digits):
            start = 1 if index == 0 else 0
            for d in range(start, digit):
                if d in seen:
                    continue
                unique += permutation(9 - index, length - index - 1)
            if digit in seen:
                break
            seen.add(digit)

        return n - unique


if __name__ == "__main__":
    solution = Solution()

    assert solution.numDupDigitsAtMostN(20) == 1
    assert solution.numDupDigitsAtMostN(100) == 10
    assert solution.numDupDigitsAtMostN(1000) == 262

    print("All tests passed!")
