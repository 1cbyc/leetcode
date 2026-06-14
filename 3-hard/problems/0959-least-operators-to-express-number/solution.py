from functools import lru_cache


class Solution:
    def leastOpsExpressTarget(self, x: int, target: int) -> int:
        @lru_cache(maxsize=None)
        def dfs(value: int) -> int:
            if x > value:
                return min(2 * value - 1, 2 * (x - value))
            if x == value:
                return 0

            power = x
            operators = 0
            while power < value:
                power *= x
                operators += 1

            if power == value:
                return operators

            answer = dfs(value - power // x) + operators
            if power < 2 * value:
                answer = min(answer, dfs(power - value) + operators + 1)

            return answer

        return dfs(target)


if __name__ == "__main__":
    solution = Solution()

    assert solution.leastOpsExpressTarget(3, 19) == 5
    assert solution.leastOpsExpressTarget(2, 3) == 2
    assert solution.leastOpsExpressTarget(5, 501) == 8
    assert solution.leastOpsExpressTarget(100, 100_000_000) == 3
    assert solution.leastOpsExpressTarget(3, 1) == 1

    print("All tests passed!")
