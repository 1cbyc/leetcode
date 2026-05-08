import heapq
from typing import List

class Solution:
    def scheduleCourse(self, courses: List[List[int]]) -> int:
        courses.sort(key=lambda x: x[1])
        
        taken = []
        now = 0
        for d, last in courses:
            if now + d <= last:
                heapq.heappush(taken, -d)
                now += d
            elif taken and -taken[0] > d:
                now += d + heapq.heappop(taken)
                heapq.heappush(taken, -d)
                
        return len(taken)

def test_solution():
    sol = Solution()
    assert sol.scheduleCourse([[100,200],[200,1300],[1000,1250],[2000,3200]]) == 3
    assert sol.scheduleCourse([[1,2]]) == 1
    assert sol.scheduleCourse([[3,2],[4,3]]) == 0
    print("Tests passed")

if __name__ == "__main__":
    test_solution()
