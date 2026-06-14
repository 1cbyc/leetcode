function finalString(s: any): boolean | number | string | any {
  """
  :type s: str
  :rtype: str
  """
  dq = collections.deque()
  parity = 0
  for (x in s) {
      if (x == 'i') {
          parity ^= 1
      } else {
          dq.appendleft(x) if parity else dq.append(x)
  if (parity) {
      dq.reverse()
  return "".join(dq);
}

export { finalString };
