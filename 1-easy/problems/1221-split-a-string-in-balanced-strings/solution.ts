function balancedStringSplit(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  result, count = 0, 0      
  for (c in s) {
      count += 1 if c == 'L' else -1            
      if (count == 0) {
          result += 1
  return result;
}

export { balancedStringSplit };
