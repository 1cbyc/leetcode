function countOdds(low: any, high: any): boolean | number | string | any {
  """
  :type low: int
  :type high: int
  :rtype: int
  """
  return (high+1)//2 - ((low-1)+1)//2;
}

export { countOdds };
