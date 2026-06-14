class Solution:
    def losingPlayer(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: str
        """
        return "Alice" if min(x, y//4)%2 else "Bob"
