import bisect

class MyCalendarThree:
    def __init__(self):
        self.times = []
        self.diffs = {}

    def book(self, startTime: int, endTime: int) -> int:
        if startTime not in self.diffs:
            bisect.insort(self.times, startTime)
            self.diffs[startTime] = 0
        if endTime not in self.diffs:
            bisect.insort(self.times, endTime)
            self.diffs[endTime] = 0
        
        self.diffs[startTime] += 1
        self.diffs[endTime] -= 1
        
        max_k = 0
        cur_k = 0
        for t in self.times:
            cur_k += self.diffs[t]
            if cur_k > max_k:
                max_k = cur_k
        return max_k

def test_solution():
    obj = MyCalendarThree()
    assert obj.book(10, 20) == 1
    assert obj.book(50, 60) == 1
    assert obj.book(10, 40) == 2
    assert obj.book(5, 15) == 3
    assert obj.book(5, 10) == 3
    assert obj.book(25, 55) == 3
    print("Tests passed")

if __name__ == "__main__":
    test_solution()
