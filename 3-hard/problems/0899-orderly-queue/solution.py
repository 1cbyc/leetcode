class Solution:
    def orderlyQueue(self, s: str, k: int) -> str:
        if k > 1:
            return "".join(sorted(s))

        return min(s[i:] + s[:i] for i in range(len(s)))


if __name__ == "__main__":
    solution = Solution()

    assert solution.orderlyQueue("cba", 1) == "acb"
    assert solution.orderlyQueue("baaca", 3) == "aaabc"
    assert solution.orderlyQueue("nhtq", 1) == "htqn"

    print("All tests passed!")
