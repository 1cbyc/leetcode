from collections import defaultdict


class Solution:
    def countOfAtoms(self, formula: str) -> str:
        index = 0
        n = len(formula)

        def parse() -> dict:
            nonlocal index
            counts: dict[str, int] = defaultdict(int)

            while index < n and formula[index] != ")":
                if formula[index] == "(":
                    index += 1
                    inner = parse()
                    index += 1
                    multiplier = parse_number()
                    for name, value in inner.items():
                        counts[name] += value * multiplier
                else:
                    name = parse_name()
                    multiplier = parse_number()
                    counts[name] += multiplier

            return counts

        def parse_name() -> str:
            nonlocal index
            start = index
            index += 1
            while index < n and formula[index].islower():
                index += 1
            return formula[start:index]

        def parse_number() -> int:
            nonlocal index
            start = index
            while index < n and formula[index].isdigit():
                index += 1
            if start == index:
                return 1
            return int(formula[start:index])

        counts = parse()
        return "".join(
            name + (str(counts[name]) if counts[name] > 1 else "")
            for name in sorted(counts)
        )


if __name__ == "__main__":
    solution = Solution()

    assert solution.countOfAtoms("H2O") == "H2O"
    assert solution.countOfAtoms("Mg(OH)2") == "H2MgO2"
    assert solution.countOfAtoms("K4(ON(SO3)2)2") == "K4N2O14S4"

    print("All tests passed!")
