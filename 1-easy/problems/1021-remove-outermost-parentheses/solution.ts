function removeOuterParentheses(S: any): boolean | number | string | any {
  """
  :type S: str
  :rtype: str
  """
  deep = 1
  result, cnt = [], 0
  for (c in S) {
      if (c == '(' && cnt >= deep) {
          result.append(c)
      if (c == ')' && cnt > deep) {
          result.append(c)
      cnt += 1 if c == '(' else -1
  return "".join(result);
}

export { removeOuterParentheses };
