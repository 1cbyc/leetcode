from functools import lru_cache


class Solution:
    def superEggDrop(self, k: int, n: int) -> int:
        @lru_cache(maxsize=None)
        def drop(eggs: int, floors: int) -> int:
            if eggs == 1:
                return floors
            if floors == 0:
                return 0

            left, right = 1, floors + 1
            while left < right:
                mid = (left + right) // 2
                broken = drop(eggs - 1, mid - 1)
                unbroken = drop(eggs, floors - mid)
                if broken >= unbroken:
                    right = mid
                else:
                    left = mid + 1

            return 1 + drop(eggs - 1, left - 1)

        return drop(k, n)


if __name__ == "__main__":
    solution = Solution()

    assert solution.superEggDrop(1, 2) == 2
    assert solution.superEggDrop(2, 6) == 3
    assert solution.superEggDrop(3, 14) == 4
    assert solution.superEggDrop(1, 1) == 1
    assert solution.superEggDrop(2, 1) == 1
    assert solution.superEggDrop(4, 100) == 8

    print("All tests passed!")
