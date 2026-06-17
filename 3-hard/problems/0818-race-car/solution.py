from functools import lru_cache


class Solution:
    def racecar(self, target: int) -> int:
        @lru_cache(maxsize=None)
        def dp(position: int) -> int:
            length = position.bit_length()
            if (1 << length) - 1 == position:
                return length

            best = length + 1 + dp((1 << length) - 1 - position)

            for reverse in range(length - 1):
                gap = (1 << reverse) - 1
                best = min(best, length - 1 + reverse + 2 + dp(position - (1 << (length - 1)) + 1 + gap))

            return best

        return dp(target)


if __name__ == "__main__":
    solution = Solution()

    assert solution.racecar(3) == 2
    assert solution.racecar(6) == 5
    assert solution.racecar(1) == 1

    print("All tests passed!")
