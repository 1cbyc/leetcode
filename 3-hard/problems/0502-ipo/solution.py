import heapq
from typing import List


class Solution:
    def findMaximizedCapital(
        self, k: int, w: int, profits: List[int], capital: List[int]
    ) -> int:
        projects = sorted(zip(capital, profits))
        available: List[int] = []
        index = 0
        n = len(projects)

        for _ in range(k):
            while index < n and projects[index][0] <= w:
                heapq.heappush(available, -projects[index][1])
                index += 1

            if not available:
                break

            w += -heapq.heappop(available)

        return w


if __name__ == "__main__":
    solution = Solution()

    assert solution.findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]) == 4
    assert solution.findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2]) == 6
    assert solution.findMaximizedCapital(1, 2, [1, 2, 3], [1, 1, 2]) == 5

    print("All tests passed!")
