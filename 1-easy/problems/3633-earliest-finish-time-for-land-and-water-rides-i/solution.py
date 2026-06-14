from typing import List, Optional, Dict, Set, Tuple

class Solution:
    def earliestFinishTime(self, landStartTime, landDuration, waterStartTime, waterDuration):
        """
        :type landStartTime: List[int]
        :type landDuration: List[int]
        :type waterStartTime: List[int]
        :type waterDuration: List[int]
        :rtype: int
        """
        mn_land = min(landStartTime[i]+landDuration[i] for i in range(len(landStartTime)))
        mn_water = min(waterStartTime[i]+waterDuration[i] for i in range(len(waterStartTime)))
        return min(min(max(landStartTime[i], mn_water)+landDuration[i] for i in range(len(landStartTime))), 
                   min(max(waterStartTime[i], mn_land)+waterDuration[i] for i in range(len(waterStartTime))))
