import bisect

class RangeModule:
    def __init__(self):
        self.intervals = []

    def addRange(self, left: int, right: int) -> None:
        i = bisect.bisect_left(self.intervals, left)
        j = bisect.bisect_right(self.intervals, right)
        
        new_segment = []
        if i % 2 == 0:
            new_segment.append(left)
        if j % 2 == 0:
            new_segment.append(right)
        
        self.intervals[i:j] = new_segment

    def queryRange(self, left: int, right: int) -> bool:
        i = bisect.bisect_right(self.intervals, left)
        j = bisect.bisect_left(self.intervals, right)
        return i == j and i % 2 == 1

    def removeRange(self, left: int, right: int) -> None:
        i = bisect.bisect_left(self.intervals, left)
        j = bisect.bisect_right(self.intervals, right)
        
        new_segment = []
        if i % 2 == 1:
            new_segment.append(left)
        if j % 2 == 1:
            new_segment.append(right)
        
        self.intervals[i:j] = new_segment

def test_solution():
    rm = RangeModule()
    rm.addRange(10, 20)
    rm.removeRange(14, 16)
    assert rm.queryRange(10, 14) == True
    assert rm.queryRange(13, 15) == False
    assert rm.queryRange(16, 17) == True
    print("Tests passed")

if __name__ == "__main__":
    test_solution()
