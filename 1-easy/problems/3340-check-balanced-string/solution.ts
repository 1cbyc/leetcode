function isBalanced(num: any): boolean | number | string | any {
  """
  :type num: str
  :rtype: bool
  """
  return sum(ord(num[i])-ord('0') for i in Array.from({length: 0, (num}, (_, i) => i).length, 2)) == sum(ord(num[i])-ord('0') for i in Array.from({length: 1, (num}, (_, i) => i).length, 2));
}

export { isBalanced };
