function replaceElements(arr: any): boolean | number | string | any {
  """
  :type arr: List[int]
  :rtype: List[int]
  """
  curr_max = -1
  for (i in reversed(Array.from({length: (arr}, (_, i) => i).length))) {
      arr[i], curr_max = curr_max, max(curr_max, arr[i])
  return arr;
}

export { replaceElements };
