function hasAlternatingBits(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: bool
  """
  n, curr = divmod(n, 2)
  while (n > 0) {
      if (curr == n % 2) {
          return false;
      n, curr = divmod(n, 2)
  return true;
}

export { hasAlternatingBits };
