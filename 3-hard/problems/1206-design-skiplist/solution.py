import random


class Node:
    __slots__ = ("val", "forward")

    def __init__(self, val: int, level: int) -> None:
        self.val = val
        self.forward = [None] * (level + 1)


class Skiplist:
    MAX_LEVEL = 16
    P = 0.5

    def __init__(self) -> None:
        self.head = Node(-1, self.MAX_LEVEL)
        self.level = 0

    def _random_level(self) -> int:
        level = 0
        while random.random() < self.P and level < self.MAX_LEVEL:
            level += 1
        return level

    def search(self, target: int) -> bool:
        current = self.head
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].val < target:
                current = current.forward[i]
        current = current.forward[0]
        return current is not None and current.val == target

    def add(self, num: int) -> None:
        update = [self.head] * (self.MAX_LEVEL + 1)
        current = self.head
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].val < num:
                current = current.forward[i]
            update[i] = current

        new_level = self._random_level()
        if new_level > self.level:
            for i in range(self.level + 1, new_level + 1):
                update[i] = self.head
            self.level = new_level

        node = Node(num, new_level)
        for i in range(new_level + 1):
            node.forward[i] = update[i].forward[i]
            update[i].forward[i] = node

    def erase(self, num: int) -> bool:
        update = [None] * (self.MAX_LEVEL + 1)
        current = self.head
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].val < num:
                current = current.forward[i]
            update[i] = current

        target = current.forward[0]
        if target is None or target.val != num:
            return False

        for i in range(self.level + 1):
            if update[i].forward[i] is not target:
                break
            update[i].forward[i] = target.forward[i]

        while self.level > 0 and self.head.forward[self.level] is None:
            self.level -= 1

        return True


if __name__ == "__main__":
    random.seed(0)
    skiplist = Skiplist()
    skiplist.add(1)
    skiplist.add(2)
    skiplist.add(3)
    assert skiplist.search(0) is False
    skiplist.add(4)
    assert skiplist.search(1) is True
    assert skiplist.erase(0) is False
    assert skiplist.erase(1) is True
    assert skiplist.search(1) is False

    print("All tests passed!")
