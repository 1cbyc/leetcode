from collections import defaultdict


class FreqStack:
    def __init__(self) -> None:
        self.freq: dict[int, int] = defaultdict(int)
        self.groups: dict[int, list[int]] = defaultdict(list)
        self.max_freq = 0

    def push(self, val: int) -> None:
        self.freq[val] += 1
        frequency = self.freq[val]
        self.max_freq = max(self.max_freq, frequency)
        self.groups[frequency].append(val)

    def pop(self) -> int:
        val = self.groups[self.max_freq].pop()
        self.freq[val] -= 1
        if not self.groups[self.max_freq]:
            self.max_freq -= 1
        return val


if __name__ == "__main__":
    stack = FreqStack()
    for value in [5, 7, 5, 7, 4, 5]:
        stack.push(value)

    assert stack.pop() == 5
    assert stack.pop() == 7
    assert stack.pop() == 5
    assert stack.pop() == 4

    print("All tests passed!")
