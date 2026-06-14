function busyStudent(startTime: any, endTime: any, queryTime: any): boolean | number | string | any {
  """
  :type startTime: List[int]
  :type endTime: List[int]
  :type queryTime: int
  :rtype: int
  """
  return sum(s <= queryTime <= e for s, e in itertools.izip(startTime, endTime));
}

export { busyStudent };
