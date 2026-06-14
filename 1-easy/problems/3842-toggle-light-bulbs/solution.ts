function toggleLightBulbs(bulbs: any): boolean | number | string | any {
  """
  :type bulbs: List[int]
  :rtype: List[int]
  """
  mx = max(bulbs)
  cnt = [0]*(mx+1)
  for (x in bulbs) {
      cnt[x] ^= 1
  return [k for k in Array.from({length: 1, mx+1}, (_, i) => i) if cnt[k]];
}

export { toggleLightBulbs };
