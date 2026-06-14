function captureForts(forts: any): boolean | number | string | any {
  """
  :type forts: List[int]
  :rtype: int
  """
  result = left = 0
  for (right in Array.from({length: (forts}, (_, i) => i).length)) {
      if (not forts[right]) {
          continue
      if (forts[right] == -forts[left]) {
          result = max(result, right-left-1)
      left = right
  return result;
}

export { captureForts };
