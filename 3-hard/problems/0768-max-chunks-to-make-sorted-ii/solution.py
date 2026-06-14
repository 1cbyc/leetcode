from typing import List


class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        n = len(arr)
        suffix_min = [0] * n
        suffix_min[-1] = arr[-1]

        for index in range(n - 2, -1, -1):
            suffix_min[index] = min(arr[index], suffix_min[index + 1])

        chunks = 0
        running_max = 0

        for index in range(n):
            running_max = max(running_max, arr[index])
            if index == n - 1 or running_max <= suffix_min[index + 1]:
                chunks += 1

        return chunks


if __name__ == "__main__":
    solution = Solution()

    assert solution.maxChunksToSorted([5, 4, 7, 8, 3, 9, 2, 10, 1, 6]) == 1
    assert solution.maxChunksToSorted([2, 1, 3, 4, 4]) == 4
    assert solution.maxChunksToSorted([1, 1, 1]) == 3
    assert solution.maxChunksToSorted([4, 3, 2, 1]) == 1
    assert solution.maxChunksToSorted([1, 2, 3, 4]) == 4

    print("All tests passed!")
