from typing import List, Set


class Solution:
    def braceExpansionII(self, expression: str) -> List[str]:
        self.pos = 0
        self.expr = expression

        def parse_union() -> Set[str]:
            result = parse_concat()
            while self.pos < len(self.expr) and self.expr[self.pos] == ",":
                self.pos += 1
                result |= parse_concat()
            return result

        def parse_concat() -> Set[str]:
            result = {""}
            while self.pos < len(self.expr) and self.expr[self.pos] not in ",}":
                if self.expr[self.pos] == "{":
                    self.pos += 1
                    inner = parse_union()
                    self.pos += 1  # skip '}'
                else:
                    start = self.pos
                    while self.pos < len(self.expr) and self.expr[self.pos].isalpha():
                        self.pos += 1
                    inner = {self.expr[start:self.pos]}
                result = {a + b for a in result for b in inner}
            return result

        return sorted(parse_union())


if __name__ == "__main__":
    solution = Solution()

    assert solution.braceExpansionII("{a,b}{c,{d,e}}") == ["ac", "ad", "ae", "bc", "bd", "be"]
    assert solution.braceExpansionII("{{a,z},a{b,c},{ab,z}}") == ["a", "ab", "ac", "z"]
    assert solution.braceExpansionII("a") == ["a"]

    print("All tests passed!")
