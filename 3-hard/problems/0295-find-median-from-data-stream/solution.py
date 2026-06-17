import heapq


class MedianFinder:
    def __init__(self) -> None:
        self.small: list[int] = []
        self.large: list[int] = []

    def addNum(self, num: int) -> None:
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))

        if len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def findMedian(self) -> float:
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2


if __name__ == "__main__":
    finder = MedianFinder()
    finder.addNum(1)
    finder.addNum(2)
    assert finder.findMedian() == 1.5
    finder.addNum(3)
    assert finder.findMedian() == 2

    finder2 = MedianFinder()
    for value in [6, 10, 2, 6, 5, 0]:
        finder2.addNum(value)
    assert finder2.findMedian() == 5.5

    print("All tests passed!")
