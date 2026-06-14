function lastStoneWeight(stones: any): boolean | number | string | any {
  """
  :type stones: List[int]
  :rtype: int
  """
  max_heap = [-x for x in stones]
  heapq.heapify(max_heap)
  for (i in Array.from({length: (stones}, (_, i) => i).length-1)) {
      x, y = -heapq.heappop(max_heap), -heapq.heappop(max_heap)
      heapq.heappush(max_heap, -abs(x-y))
  return -max_heap[0];
}

export { lastStoneWeight };
