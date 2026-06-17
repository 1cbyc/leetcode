from typing import List


class Solution:
    def oddEvenJumps(self, arr: List[int]) -> int:
        n = len(arr)

        def make_jumps(indices: List[int]) -> List[int]:
            result = [None] * n
            stack: List[int] = []
            for index in indices:
                while stack and stack[-1] < index:
                    result[stack.pop()] = index
                stack.append(index)
            return result

        sorted_asc = sorted(range(n), key=lambda i: (arr[i], i))
        odd_jump = make_jumps(sorted_asc)

        sorted_desc = sorted(range(n), key=lambda i: (-arr[i], i))
        even_jump = make_jumps(sorted_desc)

        odd = [False] * n
        even = [False] * n
        odd[n - 1] = even[n - 1] = True

        for i in range(n - 2, -1, -1):
            if odd_jump[i] is not None:
                odd[i] = even[odd_jump[i]]
            if even_jump[i] is not None:
                even[i] = odd[even_jump[i]]

        return sum(odd)


if __name__ == "__main__":
    solution = Solution()

    assert solution.oddEvenJumps([10, 13, 12, 14, 15]) == 2
    assert solution.oddEvenJumps([2, 3, 1, 1, 4]) == 3
    assert solution.oddEvenJumps([5, 1, 3, 4, 2]) == 3

    print("All tests passed!")
