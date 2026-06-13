from typing import List


class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        answer = [0] * len(temperatures)
        stack: List[int] = []

        for day, temp in enumerate(temperatures):
            while stack and temperatures[stack[-1]] < temp:
                prev_day = stack.pop()
                answer[prev_day] = day - prev_day
            stack.append(day)

        return answer


def test_solution():
    solution = Solution()

    cases = [
        ([73, 74, 75, 71, 69, 72, 76, 73], [1, 1, 4, 2, 1, 1, 0, 0]),
        ([30, 40, 50, 60], [1, 1, 1, 0]),
        ([30, 60, 90], [1, 1, 0]),
        ([55], [0]),
    ]

    for temperatures, expected in cases:
        assert solution.dailyTemperatures(temperatures) == expected

    print("All tests passed!")


if __name__ == "__main__":
    test_solution()
