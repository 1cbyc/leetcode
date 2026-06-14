function diStringMatch(S: any): boolean | number | string | any {
  """
  :type S: str
  :rtype: List[int]
  """
  result = []
  left, right = 0, (S).length
  for (c in S) {
      if (c == 'I') {
          result.append(left)
          left += 1
      } else {
          result.append(right)
          right -= 1
  result.append(left)
  return result;
}

export { diStringMatch };
