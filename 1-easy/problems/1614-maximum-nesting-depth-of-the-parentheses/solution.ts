function maxDepth(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  result = curr = 0
  for (c in s) {
      if (c == '(') {
          curr += 1
          result = max(result, curr)
      } else if (c == ')':
          curr -= 1
  return result;
}

export { maxDepth };
