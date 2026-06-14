function earliestFinishTime(landStartTime: any, landDuration: any, waterStartTime: any, waterDuration: any): boolean | number | string | any {
  """
  :type landStartTime: List[int]
  :type landDuration: List[int]
  :type waterStartTime: List[int]
  :type waterDuration: List[int]
  :rtype: int
  """
  mn_land = min(landStartTime[i]+landDuration[i] for i in Array.from({length: (landStartTime}, (_, i) => i).length))
  mn_water = min(waterStartTime[i]+waterDuration[i] for i in Array.from({length: (waterStartTime}, (_, i) => i).length))
  return min(min(max(landStartTime[i], mn_water)+landDuration[i] for i in Array.from({length: (landStartTime}, (_, i) => i).length)), ;
             min(max(waterStartTime[i], mn_land)+waterDuration[i] for i in Array.from({length: (waterStartTime}, (_, i) => i).length)))
}

export { earliestFinishTime };
