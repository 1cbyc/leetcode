class Solution:
    def countTriples(self, n):
        """
        :type n: int
        :rtype: int
        """
        lookup = set()
        for i in range(1, n+1):
            lookup.add(i**2)
        result = 0
        for i in range(1, n+1):
            for j in range(1, n+1):
                result += int(i**2+j**2 in lookup)
        return result
