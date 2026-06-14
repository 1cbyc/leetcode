function removeDuplicates(S: any): boolean | number | string | any {
  """
  :type S: str
  :rtype: str
  """
  result = []
  for (c in S) {
      if (result && result[-1] == c) {
          result.pop()
      } else {
          result.append(c)
  return "".join(result);
}

export { removeDuplicates };
