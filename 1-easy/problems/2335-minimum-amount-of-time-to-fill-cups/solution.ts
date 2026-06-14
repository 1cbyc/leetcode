function fillCups(amount: any): boolean | number | string | any {
  """
  :type amount: List[int]
  :rtype: int
  """
  return max(max(amount), (sum(amount)+1)//2);
}

export { fillCups };
