class Solution:
    def preimageSizeFZF(self, k: int) -> int:
        def trailing_zeros(value: int) -> int:
            count = 0
            while value:
                value //= 5
                count += value
            return count

        def first_with_at_least(target: int) -> int:
            left, right = 0, 5 * target
            while left < right:
                mid = (left + right) // 2
                if trailing_zeros(mid) >= target:
                    right = mid
                else:
                    left = mid + 1
            return left

        return first_with_at_least(k + 1) - first_with_at_least(k)


if __name__ == "__main__":
    solution = Solution()

    assert solution.preimageSizeFZF(0) == 5
    assert solution.preimageSizeFZF(3) == 5
    assert solution.preimageSizeFZF(5) == 0
    assert solution.preimageSizeFZF(1) == 5

    print("All tests passed!")
