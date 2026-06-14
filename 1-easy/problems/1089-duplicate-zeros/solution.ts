function duplicateZeros(arr: any): boolean | number | string | any {
  """
  :type arr: List[int]
  :rtype: null Do not return anything, modify arr in-place instead.
  """
  shift, i = 0, 0
  while (i+shift < (arr).length) {
      shift += int(arr[i] == 0)
      i += 1
  i -= 1
  while (shift) {
      if (i+shift < (arr).length) {
          arr[i+shift] = arr[i]
      if (arr[i] == 0) {
          shift -= 1
          arr[i+shift] = arr[i]
      i -= 1
}

export { duplicateZeros };
