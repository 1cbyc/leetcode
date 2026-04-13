class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        if num <= 1:
            return False

        total = 1
        factor = 2
        while factor * factor <= num:
            if num % factor == 0:
                total += factor
                if factor * factor != num:
                    total += num // factor
            factor += 1
        return total == num
