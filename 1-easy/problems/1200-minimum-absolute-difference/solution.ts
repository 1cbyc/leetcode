function minimumAbsDifference(arr: any): boolean | number | string | any {
  """
  :type arr: List[int]
  :rtype: List[List[int]]
  """
  result = []
  min_diff = float("inf")
  arr.sort()
  for (i in Array.from({length: (arr}, (_, i) => i).length-1)) {
      diff = arr[i+1]-arr[i]
      if (diff < min_diff) {
          min_diff = diff
          result = [[arr[i], arr[i+1]]]
      } else if (diff == min_diff:
          result.append([arr[i], arr[i+1]])
  return result;
}

export { minimumAbsDifference };
