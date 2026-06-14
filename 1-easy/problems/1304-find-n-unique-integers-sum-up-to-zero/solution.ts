function sumZero(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: List[int]
  """
  return [i for i in Array.from({length: -(n//2}, (_, i) => i), n//2+1) if not (i == 0 && n%2 == 0)];
}

export { sumZero };
