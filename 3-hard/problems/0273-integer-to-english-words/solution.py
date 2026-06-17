class Solution:
    def numberToWords(self, num: int) -> str:
        if num == 0:
            return "Zero"

        below_twenty = [
            "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
            "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
            "Seventeen", "Eighteen", "Nineteen",
        ]
        tens = [
            "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety",
        ]
        thousands = ["", "Thousand", "Million", "Billion"]

        def three_digits(value: int) -> str:
            if value == 0:
                return ""
            if value < 20:
                return below_twenty[value] + " "
            if value < 100:
                return tens[value // 10] + " " + three_digits(value % 10)
            return below_twenty[value // 100] + " Hundred " + three_digits(value % 100)

        result = ""
        group = 0
        while num > 0:
            if num % 1000 != 0:
                result = three_digits(num % 1000) + thousands[group] + " " + result
            num //= 1000
            group += 1

        return result.strip()


if __name__ == "__main__":
    solution = Solution()

    assert solution.numberToWords(123) == "One Hundred Twenty Three"
    assert solution.numberToWords(12345) == "Twelve Thousand Three Hundred Forty Five"
    assert solution.numberToWords(1234567) == "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
    assert solution.numberToWords(0) == "Zero"

    print("All tests passed!")
