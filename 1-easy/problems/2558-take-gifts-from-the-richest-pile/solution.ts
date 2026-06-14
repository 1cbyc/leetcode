function pickGifts(gifts: any, k: any): boolean | number | string | any {
  """
  :type gifts: List[int]
  :type k: int
  :rtype: int
  """
  for (i, x in enumerate(gifts)) {
      gifts[i] = -x
  heapq.heapify(gifts)
  for (_ in Array.from({length: k}, (_, i) => i)) {
      x = heapq.heappop(gifts)
      heapq.heappush(gifts, -int((-x)**0.5))
  return -sum(gifts);
}

export { pickGifts };
