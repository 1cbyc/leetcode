function threeConsecutiveOdds(arr: any): boolean | number | string | any {
  """
  :type arr: List[int]
  :rtype: bool
  """
  count = 0
  for (x in arr) {
      count = count+1 if x%2 else 0
      if (count == 3) {
          return true;
  return false;
}

export { threeConsecutiveOdds };
