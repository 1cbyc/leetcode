class Solution:
    def consecutiveNumbersSum(self, n: int) -> int:
        answer = 0
        length = 1
        triangle = 1

        while triangle <= n:
            if (n - triangle) % length == 0:
                answer += 1
            length += 1
            triangle += length

        return answer


if __name__ == "__main__":
    solution = Solution()

    assert solution.consecutiveNumbersSum(5) == 2
    assert solution.consecutiveNumbersSum(9) == 3
    assert solution.consecutiveNumbersSum(15) == 4
    assert solution.consecutiveNumbersSum(1) == 1
    assert solution.consecutiveNumbersSum(10) == 2

    print("All tests passed!")
