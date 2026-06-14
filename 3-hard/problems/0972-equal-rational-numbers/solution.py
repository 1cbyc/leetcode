import math
from typing import Tuple


class Solution:
    def isRationalEqual(self, s: str, t: str) -> bool:
        num_s, den_s = self._to_fraction(s)
        num_t, den_t = self._to_fraction(t)
        return num_s == num_t and den_s == den_t

    def _to_fraction(self, value: str) -> Tuple[int, int]:
        dot_index = value.find(".")

        if dot_index < 0:
            return int(value), 1

        integer = int(value[:dot_index]) if value[:dot_index] else 0

        if dot_index == len(value) - 1:
            return integer, 1

        repeating_index = value.find("(")
        if repeating_index < 0:
            decimal_part = value[dot_index + 1 :]
            numerator = int(decimal_part) if decimal_part else 0
            denominator = 10 ** len(decimal_part)
            gcd = math.gcd(numerator, denominator) or 1
            numerator //= gcd
            denominator //= gcd
            return integer * denominator + numerator, denominator

        if repeating_index - dot_index == 1:
            repeating_part = value[repeating_index + 1 : -1]
            repeating_length = len(repeating_part)
            numerator = int(repeating_part)
            denominator = 10**repeating_length - 1
        else:
            non_repeating = value[dot_index + 1 : repeating_index]
            repeating_part = value[repeating_index + 1 : -1]
            non_repeating_length = len(non_repeating)
            repeating_length = len(repeating_part)
            non_repeating_value = int(non_repeating) if non_repeating else 0
            repeating_value = int(repeating_part)
            numerator = (
                non_repeating_value * 10**repeating_length
                + repeating_value
                - non_repeating_value
            )
            denominator = (10**repeating_length - 1) * 10**non_repeating_length

        gcd = math.gcd(numerator, denominator) or 1
        numerator //= gcd
        denominator //= gcd
        return integer * denominator + numerator, denominator


if __name__ == "__main__":
    solution = Solution()

    assert solution.isRationalEqual("0.(52)", "0.5(25)")
    assert solution.isRationalEqual("0.1666(6)", "0.166(66)")
    assert solution.isRationalEqual("0.9(9)", "1.")
    assert solution.isRationalEqual("1.(9)", "2.")
    assert solution.isRationalEqual("0.1(6)", "0.1666(6)")
    assert solution.isRationalEqual("12", "12.")
    assert solution.isRationalEqual("2.12", "2.12")
    assert not solution.isRationalEqual("0.5", "0.6")

    print("All tests passed!")
