import heapq
from typing import List


class Solution:
    def mincostToHireWorkers(
        self, quality: List[int], wage: List[int], k: int
    ) -> float:
        workers = sorted((wage[index] / quality[index], quality[index]) for index in range(len(quality)))
        max_heap: List[int] = []
        total_quality = 0
        min_cost = float("inf")

        for ratio, worker_quality in workers:
            heapq.heappush(max_heap, -worker_quality)
            total_quality += worker_quality

            if len(max_heap) > k:
                total_quality += heapq.heappop(max_heap)

            if len(max_heap) == k:
                min_cost = min(min_cost, total_quality * ratio)

        return min_cost


if __name__ == "__main__":
    solution = Solution()

    assert solution.mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2) == 105.0
    assert abs(
        solution.mincostToHireWorkers([3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3)
        - 30.666666666666668
    ) < 1e-5
    assert solution.mincostToHireWorkers([1], [1], 1) == 1.0

    print("All tests passed!")
