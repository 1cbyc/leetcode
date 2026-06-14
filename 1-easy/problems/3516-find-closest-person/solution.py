class Solution:
    def findClosest(self, x, y, z):
        """
        :type x: int
        :type y: int
        :type z: int
        :rtype: int
        """
        return range(3)[cmp(abs(y-z), abs(x-z))]
