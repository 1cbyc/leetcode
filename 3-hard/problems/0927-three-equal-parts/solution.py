from typing import List


class Solution:
    def threeEqualParts(self, arr: List[int]) -> List[int]:
        ones = sum(arr)

        if ones == 0:
            return [0, len(arr) - 1]
        if ones % 3 != 0:
            return [-1, -1]

        target = ones // 3
        first = second = third = 0
        count = 0

        for index, value in enumerate(arr):
            if value == 0:
                continue
            count += 1
            if count == 1:
                first = index
            elif count == target + 1:
                second = index
            elif count == 2 * target + 1:
                third = index
                break

        while third < len(arr):
            if arr[first] != arr[second] or arr[second] != arr[third]:
                return [-1, -1]
            first += 1
            second += 1
            third += 1

        return [first - 1, second]


if __name__ == "__main__":
    solution = Solution()

    assert solution.threeEqualParts([1, 0, 1, 0, 1]) == [0, 3]
    assert solution.threeEqualParts([1, 1, 0, 1, 1]) == [-1, -1]
    assert solution.threeEqualParts([1, 1, 0, 0, 1]) == [0, 2]
    assert solution.threeEqualParts([0, 0, 0]) == [0, 2]
    assert solution.threeEqualParts([0, 1, 0]) == [-1, -1]

    print("All tests passed!")
