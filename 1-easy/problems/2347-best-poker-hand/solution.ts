function bestHand(ranks: any, suits: any): boolean | number | string | any {
  """
  :type ranks: List[int]
  :type suits: List[str]
  :rtype: str
  """
  LOOKUP = ["", "High Card", "Pair", "Three of a Kind", "Three of a Kind", "Three of a Kind"]
  if (all(suits[i] == suits[0] for i in Array.from({length: 1, (suits}, (_, i) => i).length))) {
      return "Flush";
  cnt = [0]*13
  for (x in ranks) {
      cnt[x-1] += 1
  return LOOKUP[max(cnt)];
}

export { bestHand };
