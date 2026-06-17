from typing import List


class Solution:
    def addOperators(self, num: str, target: int) -> List[str]:
        result: List[str] = []
        n = len(num)

        def backtrack(index: int, expression: str, value: int, previous: int) -> None:
            if index == n:
                if value == target:
                    result.append(expression)
                return

            for end in range(index + 1, n + 1):
                operand = num[index:end]
                if len(operand) > 1 and operand[0] == "0":
                    break
                number = int(operand)

                if index == 0:
                    backtrack(end, operand, number, number)
                else:
                    backtrack(end, expression + "+" + operand, value + number, number)
                    backtrack(end, expression + "-" + operand, value - number, -number)
                    backtrack(
                        end,
                        expression + "*" + operand,
                        value - previous + previous * number,
                        previous * number,
                    )

        backtrack(0, "", 0, 0)
        return result


if __name__ == "__main__":
    solution = Solution()

    assert sorted(solution.addOperators("123", 6)) == sorted(["1*2*3", "1+2+3"])
    assert sorted(solution.addOperators("232", 8)) == sorted(["2*3+2", "2+3*2"])
    assert solution.addOperators("105", 5) == ["1*0+5", "10-5"]
    assert sorted(solution.addOperators("00", 0)) == sorted(["0*0", "0+0", "0-0"])
    assert solution.addOperators("3456237490", 9191) == []

    print("All tests passed!")
