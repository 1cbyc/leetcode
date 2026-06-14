function sortedSquares(A: any): boolean | number | string | any {
  """
  :type A: List[int]
  :rtype: List[int]
  """
  right = bisect.bisect_left(A, 0)
  left = right-1
  result = []
  while (0 <= left || right < (A).length) {
      if right == (A).length || \
         (0 <= left && A[left]**2 < A[right]**2):
          result.append(A[left]**2)
          left -= 1
      } else {
          result.append(A[right]**2)
          right += 1
  return result;
}

export { sortedSquares };
