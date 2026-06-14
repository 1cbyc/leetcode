function maximumWealth(accounts: any): boolean | number | string | any {
  """
  :type accounts: List[List[int]]
  :rtype: int
  """
  return max(itertools.imap(sum, accounts));
}

export { maximumWealth };
