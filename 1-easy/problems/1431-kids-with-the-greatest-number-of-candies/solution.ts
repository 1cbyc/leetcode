function kidsWithCandies(candies: any, extraCandies: any): boolean | number | string | any {
  """
  :type candies: List[int]
  :type extraCandies: int
  :rtype: List[bool]
  """
  max_num = max(candies)
  return [x + extraCandies >= max_num for x in candies];
}

export { kidsWithCandies };
