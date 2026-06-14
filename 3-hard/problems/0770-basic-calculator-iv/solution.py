from collections import Counter
from typing import Iterator, List


class Poly:
    def __init__(self, term: str | None = None, coef: int | None = None) -> None:
        if term is not None and coef is not None:
            self.terms: Counter[str] = Counter({term: coef})
        else:
            self.terms = Counter()

    def __add__(self, other: "Poly") -> "Poly":
        result = Poly()
        result.terms = Counter(self.terms)
        for term, coef in other.terms.items():
            result.terms[term] += coef
            if result.terms[term] == 0:
                del result.terms[term]
        return result

    def __sub__(self, other: "Poly") -> "Poly":
        result = Poly()
        result.terms = Counter(self.terms)
        for term, coef in other.terms.items():
            result.terms[term] -= coef
            if result.terms[term] == 0:
                del result.terms[term]
        return result

    def __mul__(self, other: "Poly") -> "Poly":
        result = Poly()
        for left_term, left_coef in self.terms.items():
            for right_term, right_coef in other.terms.items():
                result.terms[self._merge(left_term, right_term)] += left_coef * right_coef
        return result

    def to_list(self) -> List[str]:
        terms = {term: coef for term, coef in self.terms.items() if coef}

        def sort_key(term: str) -> tuple:
            if term == "1":
                return (0,)
            return (-len(term.split("*")), term)

        def format_term(term: str) -> str:
            coef = terms[term]
            if term == "1":
                return str(coef)
            return f"{coef}*{term}"

        return [format_term(term) for term in sorted(terms, key=sort_key)]

    def _merge(self, left: str, right: str) -> str:
        if left == "1":
            return right
        if right == "1":
            return left

        merged: List[str] = []
        left_vars = left.split("*")
        right_vars = right.split("*")
        left_index = 0
        right_index = 0

        while left_index < len(left_vars) and right_index < len(right_vars):
            if left_vars[left_index] < right_vars[right_index]:
                merged.append(left_vars[left_index])
                left_index += 1
            else:
                merged.append(right_vars[right_index])
                right_index += 1

        merged.extend(left_vars[left_index:])
        merged.extend(right_vars[right_index:])
        return "*".join(merged)


class Solution:
    def basicCalculatorIV(
        self,
        expression: str,
        evalvars: List[str],
        evalints: List[int],
    ) -> List[str]:
        values = dict(zip(evalvars, evalints))
        tokens = [
            values[token] if token in values else token
            for token in self._tokenize(expression)
        ]
        tokens = [str(token) if isinstance(token, int) else token for token in tokens]
        postfix = self._to_postfix(tokens)
        return self._evaluate(postfix).to_list()

    def _tokenize(self, expression: str) -> Iterator[str]:
        start = 0
        for index, char in enumerate(expression):
            if char == " ":
                if start < index:
                    yield expression[start:index]
                start = index + 1
            elif char in "()+-*":
                if start < index:
                    yield expression[start:index]
                yield char
                start = index + 1
        if start < len(expression):
            yield expression[start:]

    def _to_postfix(self, tokens: List[str]) -> List[str]:
        postfix: List[str] = []
        operators: List[str] = []

        def has_precedence(previous: str, current: str) -> bool:
            if previous == "(":
                return False
            return previous == "*" or current in "+-"

        for token in tokens:
            if token == "(":
                operators.append(token)
            elif token == ")":
                while operators[-1] != "(":
                    postfix.append(operators.pop())
                operators.pop()
            elif token in "+-*":
                while operators and has_precedence(operators[-1], token):
                    postfix.append(operators.pop())
                operators.append(token)
            else:
                postfix.append(token)

        while operators:
            postfix.append(operators.pop())

        return postfix

    def _evaluate(self, postfix: List[str]) -> Poly:
        stack: List[Poly] = []

        for token in postfix:
            if token in "+-*":
                right = stack.pop()
                left = stack.pop()
                if token == "+":
                    stack.append(left + right)
                elif token == "-":
                    stack.append(left - right)
                else:
                    stack.append(left * right)
            elif token.lstrip("-").isdigit():
                stack.append(Poly("1", int(token)))
            else:
                stack.append(Poly(token, 1))

        return stack[0]


if __name__ == "__main__":
    solution = Solution()

    assert solution.basicCalculatorIV("e + 8 - a + 5", ["e"], [1]) == ["-1*a", "14"]
    assert solution.basicCalculatorIV(
        "e - 8 + temperature - pressure", ["e", "temperature"], [1, 12]
    ) == ["-1*pressure", "5"]
    assert solution.basicCalculatorIV("(e + 8) * (e - 8)", [], []) == ["1*e*e", "-64"]
    assert solution.basicCalculatorIV("1 + 2 * 3", [], []) == ["7"]

    print("All tests passed!")
