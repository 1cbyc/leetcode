from typing import List


class Solution:
    def intersectionSizeTwo(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda interval: (interval[1], -interval[0]))

        count = 0
        p1, p2 = -1, -1

        for start, end in intervals:
            in_interval = (p1 >= start) + (p2 >= start)
            if in_interval >= 2:
                continue

            if in_interval == 0:
                p1 = end
                p2 = end - 1
                count += 2
            else:
                if p1 == end:
                    p2 = end - 1
                else:
                    p2 = p1
                    p1 = end
                count += 1

        return count


if __name__ == "__main__":
    solution = Solution()

    assert solution.intersectionSizeTwo([[1, 3], [1, 4], [2, 5], [3, 5]]) == 3
    assert solution.intersectionSizeTwo([[1, 2], [2, 3], [2, 4], [4, 5]]) == 5
    assert solution.intersectionSizeTwo([[1, 3], [3, 7]]) == 3

    print("All tests passed!")
