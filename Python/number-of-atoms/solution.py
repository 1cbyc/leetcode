from typing import List
from collections import Counter

class Solution:
    def countOfAtoms(self, formula: str) -> str:
        stack = [Counter()]
        i, n = 0, len(formula)
        while i < n:
            if formula[i] == '(':
                stack.append(Counter())
                i += 1
            elif formula[i] == ')':
                i += 1
                start = i
                while i < n and formula[i].isdigit():
                    i += 1
                multi = int(formula[start:i] or 1)
                top = stack.pop()
                for atom, count in top.items():
                    stack[-1][atom] += count * multi
            else:
                start = i
                i += 1
                while i < n and formula[i].islower():
                    i += 1
                atom = formula[start:i]
                start = i
                while i < n and formula[i].isdigit():
                    i += 1
                count = int(formula[start:i] or 1)
                stack[-1][atom] += count
        
        final_counts = stack[0]
        res = []
        for atom in sorted(final_counts.keys()):
            res.append(atom)
            if final_counts[atom] > 1:
                res.append(str(final_counts[atom]))
        return "".join(res)

def test_solution():
    sol = Solution()
    assert sol.countOfAtoms("H2O") == "H2O"
    assert sol.countOfAtoms("Mg(OH)2") == "H2MgO2"
    assert sol.countOfAtoms("K4(ON(SO3)2)2") == "K4N2O14S4"
    print("Tests passed")

if __name__ == "__main__":
    test_solution()
