from typing import List


class Solution:
    def countSmaller(self, nums: List[int]) -> List[int]:
        n = len(nums)
        counts = [0] * n
        indices = list(range(n))

        def merge_sort(lo: int, hi: int) -> None:
            if hi - lo <= 1:
                return
            mid = (lo + hi) // 2
            merge_sort(lo, mid)
            merge_sort(mid, hi)

            merged = []
            left, right = lo, mid
            right_counted = 0
            while left < mid and right < hi:
                if nums[indices[right]] < nums[indices[left]]:
                    right_counted += 1
                    merged.append(indices[right])
                    right += 1
                else:
                    counts[indices[left]] += right_counted
                    merged.append(indices[left])
                    left += 1

            while left < mid:
                counts[indices[left]] += right_counted
                merged.append(indices[left])
                left += 1
            while right < hi:
                merged.append(indices[right])
                right += 1

            indices[lo:hi] = merged

        merge_sort(0, n)
        return counts


if __name__ == "__main__":
    solution = Solution()

    assert solution.countSmaller([5, 2, 6, 1]) == [2, 1, 1, 0]
    assert solution.countSmaller([-1]) == [0]
    assert solution.countSmaller([-1, -1]) == [0, 0]

    print("All tests passed!")
