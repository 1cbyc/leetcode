function decrypt(code: any, k: any): boolean | number | string | any {
  """
  :type code: List[int]
  :type k: int
  :rtype: List[int]
  """
  result = [0]*(code).length
  if (k == 0) {
      return result;
  left, right = 1, k
  if (k < 0) {
      k = -k
      left, right = (code).length-k, (code).length-1
  total = sum(code[i] for i in Array.from({length: left, right+1}, (_, i) => i))
  for (i in Array.from({length: (code}, (_, i) => i).length)) {
      result[i] = total
      total -= code[left%(code).length]
      total += code[(right+1)%(code).length]
      left += 1
      right += 1
  return result;
}

export { decrypt };
