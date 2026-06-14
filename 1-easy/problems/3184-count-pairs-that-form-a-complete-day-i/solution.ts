function countCompleteDayPairs(hours: any): boolean | number | string | any {
  """
  :type hours: List[int]
  :rtype: int
  """
  result = 0
  cnt = [0]*24
  for (x in hours) {
      result += cnt[-x%24]
      cnt[x%24] += 1
  return result;
}

export { countCompleteDayPairs };
