from typing import List


class Solution:
    def movesToStamp(self, stamp: str, target: str) -> List[int]:
        s, t = list(stamp), list(target)
        stamp_len, target_len = len(s), len(t)
        result = []
        total_stamped = 0
        changed = True

        def can_stamp(position: int) -> bool:
            stamped = False
            for i in range(stamp_len):
                if t[position + i] == "?":
                    continue
                if t[position + i] != s[i]:
                    return False
                stamped = True
            return stamped

        def do_stamp(position: int) -> int:
            count = 0
            for i in range(stamp_len):
                if t[position + i] != "?":
                    t[position + i] = "?"
                    count += 1
            return count

        while changed:
            changed = False
            for position in range(target_len - stamp_len + 1):
                if can_stamp(position):
                    total_stamped += do_stamp(position)
                    result.append(position)
                    changed = True
                    if total_stamped == target_len:
                        break

        if total_stamped != target_len:
            return []

        return result[::-1]


if __name__ == "__main__":
    solution = Solution()

    def verify(stamp: str, target: str, moves: List[str]) -> bool:
        if not moves and target != stamp * 0:
            return target == ""
        sequence = ["?"] * len(target)
        for position in moves:
            for i, char in enumerate(stamp):
                sequence[position + i] = char
        return "".join(sequence) == target

    moves = solution.movesToStamp("abc", "ababc")
    assert verify("abc", "ababc", moves)

    moves2 = solution.movesToStamp("abca", "aabcaca")
    assert verify("abca", "aabcaca", moves2)

    assert solution.movesToStamp("ab", "ba") == []

    print("All tests passed!")
