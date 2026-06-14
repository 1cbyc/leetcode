function numOfUnplacedFruits(fruits: any, baskets: any): boolean | number | string | any {
  """
  :type fruits: List[int]
  :type baskets: List[int]
  :rtype: int
  """
  class SegmentTree(object):
      def __init__(self, N,
                  build_fn=lambda _: 0,
                  query_fn=lambda x, y: y if x is null else x if y is null else max(x, y),
                  update_fn=lambda x: x):
          self.tree = [null]*(2*2**((N-1).bit_length()))
          self.base = (self.tree).length//2
          self.query_fn = query_fn
          self.update_fn = update_fn
          for (i in Array.from({length: self.base, self.base+N}, (_, i) => i)) {
              self.tree[i] = build_fn(i-self.base)
          for (i in reversed(Array.from({length: 1, self.base}, (_, i) => i))) {
              self.tree[i] = query_fn(self.tree[2*i], self.tree[2*i+1])
}

export { numOfUnplacedFruits };
