class Solution:
    def evaluate(self, expression: str) -> int:
        def split_parts(s):
            res = []
            i = 0
            while i < len(s):
                if s[i] == ' ':
                    i += 1
                    continue
                if s[i] == '(':
                    start = i
                    bal = 0
                    while i < len(s):
                        if s[i] == '(': bal += 1
                        elif s[i] == ')': bal -= 1
                        i += 1
                        if bal == 0: break
                    res.append(s[start:i])
                else:
                    start = i
                    while i < len(s) and s[i] != ' ':
                        i += 1
                    res.append(s[start:i])
            return res

        def parse(expr, scope):
            if expr[0] != '(':
                if expr[0].isalpha():
                    return scope[expr]
                return int(expr)
            
            # Remove outer parentheses and split
            tokens = split_parts(expr[1:-1])
            cmd = tokens[0]
            
            if cmd == 'add':
                return parse(tokens[1], scope) + parse(tokens[2], scope)
            elif cmd == 'mult':
                return parse(tokens[1], scope) * parse(tokens[2], scope)
            elif cmd == 'let':
                new_scope = scope.copy()
                for i in range(1, len(tokens) - 1, 2):
                    var = tokens[i]
                    val = parse(tokens[i+1], new_scope)
                    new_scope[var] = val
                return parse(tokens[-1], new_scope)
        
        return parse(expression, {})

def test_solution():
    sol = Solution()
    assert sol.evaluate("(let x 2 (mult x (let x 3 y 4 (add x y))))") == 14
    assert sol.evaluate("(let x 3 x 2 x)") == 2
    assert sol.evaluate("(let x 1 y 2 x (add x y) (add x y))") == 5
    assert sol.evaluate("(let x 2 (add (let x 3 (mult x x)) x))") == 11
    print("Tests passed")

if __name__ == "__main__":
    test_solution()
