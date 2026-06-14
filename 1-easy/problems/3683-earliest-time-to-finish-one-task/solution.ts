function earliestTime(tasks: any): boolean | number | string | any {
  """
  :type tasks: List[List[int]]
  :rtype: int
  """
  return min(s+t for s, t in tasks);
}

export { earliestTime };
