function minimumFlips(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  l = n.bit_length()
  return sum(2 for i in Array.from({length: l//2}, (_, i) => i) if (n>>i)&1 != (n>>((l-1)-i))&1);
}

export { minimumFlips };
