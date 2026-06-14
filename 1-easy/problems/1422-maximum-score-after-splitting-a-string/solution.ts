function maxScore(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: int
  """
  result, zeros, ones = 0, 0, 0
  for (i in Array.from({length: 1, (s}, (_, i) => i).length-1)) {
      if (s[i] == '0') {
          zeros += 1
      } else {
          ones += 1
      result = max(result, zeros-ones)
  return result + ones + (s[0] == '0') + (s[-1] == '1');
}

export { maxScore };
