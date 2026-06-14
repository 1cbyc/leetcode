from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def minMovesToSeat(self, seats, students):
        """
        :type seats: List[int]
        :type students: List[int]
        :rtype: int
        """
        seats.sort()
        students.sort()
        return sum(abs(a-b) for a, b in itertools.izip(seats, students))
