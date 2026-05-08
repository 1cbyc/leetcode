import random
from typing import List

class Solution:
    def __init__(self, n: int, blacklist: List[int]):
        self.m = n - len(blacklist)
        self.mapping = {}
        blacklist_set = set(blacklist)
        
        high_blacklist = {b for b in blacklist if b >= self.m}
        available_num = self.m
        
        for b in blacklist:
            if b < self.m:
                while available_num in high_blacklist:
                    available_num += 1
                self.mapping[b] = available_num
                available_num += 1

    def pick(self) -> int:
        r = random.randint(0, self.m - 1)
        return self.mapping.get(r, r)

def test_solution():
    sol = Solution(7, [2, 3, 5])
    counts = {}
    for _ in range(10000):
        val = sol.pick()
        counts[val] = counts.get(val, 0) + 1
    
    assert set(counts.keys()) == {0, 1, 4, 6}
    # Check for rough uniformity
    for v in counts.values():
        assert 2000 < v < 3000
    
    print("Tests passed")

if __name__ == "__main__":
    test_solution()
