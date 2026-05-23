from typing import List


class Solution:
    def countArrays(self, digitSum: List[int]) -> int:
        mod = 10**9 + 7
        max_value = 5000
        by_digit_sum = [[] for _ in range(51)]

        for value in range(max_value + 1):
            total = sum(map(int, str(value)))
            if total <= 50:
                by_digit_sum[total].append(value)

        previous = None

        for target in digitSum:
            current = [0] * (max_value + 1)

            if not by_digit_sum[target]:
                return 0

            if previous is None:
                for value in by_digit_sum[target]:
                    current[value] = 1
            else:
                prefix = [0] * (max_value + 1)
                running = 0

                for value in range(max_value + 1):
                    running = (running + previous[value]) % mod
                    prefix[value] = running

                for value in by_digit_sum[target]:
                    current[value] = prefix[value]

            previous = current

        return sum(previous) % mod

    def countNonDecreasingArrays(self, digitSum: List[int]) -> int:
        return self.countArrays(digitSum)


def digit_sum(value: int) -> int:
    return sum(map(int, str(value)))


def count_with_limit(digit_sums: List[int], limit: int) -> int:
    mod = 10**9 + 7
    previous = None
    groups = [[] for _ in range(51)]

    for value in range(limit + 1):
        groups[digit_sum(value)].append(value)

    for target in digit_sums:
        current = [0] * (limit + 1)

        if previous is None:
            for value in groups[target]:
                current[value] = 1
        else:
            for value in groups[target]:
                current[value] = sum(previous[: value + 1]) % mod

        previous = current

    return sum(previous) % mod


def brute_force(digit_sums: List[int], limit: int) -> int:
    values = [value for value in range(limit + 1)]
    answer = 0

    def backtrack(index: int, last: int) -> None:
        nonlocal answer

        if index == len(digit_sums):
            answer += 1
            return

        for value in values:
            if value >= last and digit_sum(value) == digit_sums[index]:
                backtrack(index + 1, value)

    backtrack(0, 0)
    return answer


def test_solution():
    solution = Solution()

    cases = [
        ([25, 1], 6),
        ([1], 4),
        ([2, 49, 23], 0),
        ([0], 1),
        ([0, 0], 1),
    ]

    for digit_sums, expected in cases:
        assert solution.countArrays(digit_sums) == expected, digit_sums

    import random

    for limit in range(1, 50):
        for n in range(1, 5):
            for _ in range(100):
                digit_sums = [random.randint(0, 12) for _ in range(n)]
                expected = brute_force(digit_sums, limit)
                actual = count_with_limit(digit_sums, limit)
                assert actual == expected, (digit_sums, limit, expected, actual)

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()
