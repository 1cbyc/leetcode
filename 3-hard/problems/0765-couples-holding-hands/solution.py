from typing import List


class Solution:
    def minSwapsCouples(self, row: List[int]) -> int:
        position = {person: index for index, person in enumerate(row)}
        swaps = 0

        for i in range(0, len(row), 2):
            first = row[i]
            partner = first ^ 1
            if row[i + 1] != partner:
                j = position[partner]
                position[row[i + 1]] = j
                position[partner] = i + 1
                row[i + 1], row[j] = row[j], row[i + 1]
                swaps += 1

        return swaps


if __name__ == "__main__":
    solution = Solution()

    assert solution.minSwapsCouples([0, 2, 1, 3]) == 1
    assert solution.minSwapsCouples([3, 2, 0, 1]) == 0
    assert solution.minSwapsCouples([0, 1, 2, 3]) == 0
    assert solution.minSwapsCouples([5, 4, 2, 6, 3, 1, 0, 7]) == 2

    print("All tests passed!")
