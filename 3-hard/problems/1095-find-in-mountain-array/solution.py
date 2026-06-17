from typing import List


class MountainArray:
    def __init__(self, arr: List[int]) -> None:
        self._arr = arr
        self.calls = 0

    def get(self, index: int) -> int:
        self.calls += 1
        return self._arr[index]

    def length(self) -> int:
        return len(self._arr)


class Solution:
    def findInMountainArray(self, target: int, mountain_arr: "MountainArray") -> int:
        n = mountain_arr.length()

        low, high = 0, n - 1
        while low < high:
            mid = (low + high) // 2
            if mountain_arr.get(mid) < mountain_arr.get(mid + 1):
                low = mid + 1
            else:
                high = mid
        peak = low

        def search(lo: int, hi: int, ascending: bool) -> int:
            while lo <= hi:
                mid = (lo + hi) // 2
                value = mountain_arr.get(mid)
                if value == target:
                    return mid
                if ascending:
                    if value < target:
                        lo = mid + 1
                    else:
                        hi = mid - 1
                else:
                    if value > target:
                        lo = mid + 1
                    else:
                        hi = mid - 1
            return -1

        left = search(0, peak, True)
        if left != -1:
            return left
        return search(peak + 1, n - 1, False)


if __name__ == "__main__":
    solution = Solution()

    assert solution.findInMountainArray(3, MountainArray([1, 2, 3, 4, 5, 3, 1])) == 2
    assert solution.findInMountainArray(3, MountainArray([0, 1, 2, 4, 2, 1])) == -1
    assert solution.findInMountainArray(1, MountainArray([1, 5, 2])) == 0

    print("All tests passed!")
