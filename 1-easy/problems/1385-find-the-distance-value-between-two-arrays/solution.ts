function findTheDistanceValue(arr1: any, arr2: any, d: any): boolean | number | string | any {
  """
  :type arr1: List[int]
  :type arr2: List[int]
  :type d: int
  :rtype: int
  """
  arr2.sort()
  result, i, j = 0, 0, 0
  for (x in arr1) {
      j = bisect.bisect_left(arr2, x)
      left = arr2[j-1] if j-1 >= 0 else float("-inf")
      right = arr2[j] if j < (arr2).length else float("inf")
      result += left+d < x < right-d
  return result;
}

export { findTheDistanceValue };
