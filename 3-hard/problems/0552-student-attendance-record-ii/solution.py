class Solution:
    def checkRecord(self, n: int) -> int:
        mod = 10**9 + 7
        # state[a][l] = sequences with `a` absences (0..1) ending in `l` late (0..2)
        state = [[0, 0, 0], [0, 0, 0]]
        state[0][0] = 1

        for _ in range(n):
            new_state = [[0, 0, 0], [0, 0, 0]]
            for absent in range(2):
                for late in range(3):
                    value = state[absent][late]
                    if value == 0:
                        continue
                    # Append 'P' -> resets late, same absences
                    new_state[absent][0] = (new_state[absent][0] + value) % mod
                    # Append 'A' -> increments absences, resets late
                    if absent == 0:
                        new_state[1][0] = (new_state[1][0] + value) % mod
                    # Append 'L' -> increments late
                    if late < 2:
                        new_state[absent][late + 1] = (new_state[absent][late + 1] + value) % mod
            state = new_state

        total = 0
        for absent in range(2):
            for late in range(3):
                total = (total + state[absent][late]) % mod
        return total


if __name__ == "__main__":
    solution = Solution()

    assert solution.checkRecord(2) == 8
    assert solution.checkRecord(1) == 3
    assert solution.checkRecord(10101) == 183236316

    print("All tests passed!")
