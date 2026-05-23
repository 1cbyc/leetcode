from itertools import product


class Solution:
    def sumOfNumbers(self, l: int, r: int, k: int) -> int:
        mod = 10**9 + 7
        choices = r - l + 1
        digit_sum = (l + r) * choices // 2
        repunit = (pow(10, k, mod) - 1) * pow(9, mod - 2, mod)

        return digit_sum * pow(choices, k - 1, mod) * repunit % mod


def brute_force(l: int, r: int, k: int) -> int:
    total = 0

    for digits in product(range(l, r + 1), repeat=k):
        value = 0
        for digit in digits:
            value = value * 10 + digit
        total += value

    return total % (10**9 + 7)


def test_solution():
    solution = Solution()

    cases = [
        (1, 2, 2, 66),
        (0, 1, 3, 444),
        (5, 5, 10, 555555520),
        (0, 0, 1, 0),
        (9, 9, 1, 9),
        (1, 9, 1, 45),
    ]

    for l, r, k, expected in cases:
        assert solution.sumOfNumbers(l, r, k) == expected, (l, r, k)

    for l in range(10):
        for r in range(l, 10):
            for k in range(1, 5):
                expected = brute_force(l, r, k)
                actual = solution.sumOfNumbers(l, r, k)
                assert actual == expected, (l, r, k, expected, actual)

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()
