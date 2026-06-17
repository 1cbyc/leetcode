import heapq
from typing import List


class DinnerPlates:
    def __init__(self, capacity: int) -> None:
        self.capacity = capacity
        self.stacks: List[List[int]] = []
        self.available: List[int] = []

    def push(self, val: int) -> None:
        while self.available and (
            self.available[0] >= len(self.stacks)
            or len(self.stacks[self.available[0]]) >= self.capacity
        ):
            heapq.heappop(self.available)

        if self.available:
            self.stacks[self.available[0]].append(val)
        else:
            self.stacks.append([val])
            heapq.heappush(self.available, len(self.stacks) - 1)

    def pop(self) -> int:
        while self.stacks and not self.stacks[-1]:
            self.stacks.pop()
        if not self.stacks:
            return -1
        return self.popAtStack(len(self.stacks) - 1)

    def popAtStack(self, index: int) -> int:
        if index < 0 or index >= len(self.stacks) or not self.stacks[index]:
            return -1
        heapq.heappush(self.available, index)
        return self.stacks[index].pop()


if __name__ == "__main__":
    plates = DinnerPlates(2)
    for value in [1, 2, 3, 4, 5]:
        plates.push(value)
    assert plates.popAtStack(0) == 2
    plates.push(20)
    plates.push(21)
    assert plates.popAtStack(0) == 20
    assert plates.popAtStack(2) == 21
    assert plates.pop() == 5
    assert plates.pop() == 4
    assert plates.pop() == 3
    assert plates.pop() == 1
    assert plates.pop() == -1

    print("All tests passed!")
