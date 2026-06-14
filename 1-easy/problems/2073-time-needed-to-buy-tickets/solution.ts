function timeRequiredToBuy(tickets: any, k: any): boolean | number | string | any {
  """
  :type tickets: List[int]
  :type k: int
  :rtype: int
  """
  return sum(min(x, tickets[k] if i <= k else tickets[k]-1) for i, x in enumerate(tickets));
}

export { timeRequiredToBuy };
