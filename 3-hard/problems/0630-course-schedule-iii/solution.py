import heapq
from typing import List


class Solution:
    def scheduleCourse(self, courses: List[List[int]]) -> int:
        courses.sort(key=lambda course: course[1])
        taken: List[int] = []
        time = 0

        for duration, deadline in courses:
            if time + duration <= deadline:
                time += duration
                heapq.heappush(taken, -duration)
            elif taken and -taken[0] > duration:
                time += duration + heapq.heappop(taken)
                heapq.heappush(taken, -duration)

        return len(taken)


if __name__ == "__main__":
    solution = Solution()

    assert solution.scheduleCourse([[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]) == 3
    assert solution.scheduleCourse([[1, 2]]) == 1
    assert solution.scheduleCourse([[3, 2], [4, 3]]) == 0

    print("All tests passed!")
