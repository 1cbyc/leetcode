import heapq
from typing import List


class Solution:
    def smallestRange(self, nums: List[List[int]]) -> List[int]:
        heap = [(row[0], index, 0) for index, row in enumerate(nums)]
        heapq.heapify(heap)
        current_max = max(row[0] for row in nums)

        best_start, best_end = heap[0][0], current_max

        while True:
            value, list_index, element_index = heapq.heappop(heap)
            if current_max - value < best_end - best_start:
                best_start, best_end = value, current_max

            if element_index + 1 == len(nums[list_index]):
                break

            next_value = nums[list_index][element_index + 1]
            current_max = max(current_max, next_value)
            heapq.heappush(heap, (next_value, list_index, element_index + 1))

        return [best_start, best_end]


if __name__ == "__main__":
    solution = Solution()

    assert solution.smallestRange([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]) == [20, 24]
    assert solution.smallestRange([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) == [1, 1]
    assert solution.smallestRange([[1], [2], [3]]) == [1, 3]

    print("All tests passed!")
