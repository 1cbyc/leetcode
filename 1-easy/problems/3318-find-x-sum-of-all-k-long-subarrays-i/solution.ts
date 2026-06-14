function findXSum(nums: any, k: any, x: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :type x: int
  :rtype: List[int]
  """
  def update(v, d, curr):
      if (d == 1) {
          sl.add((-cnt[v], -v))
      if (sl.index((-cnt[v], -v)) < x) {
          curr += d*cnt[v]*v
          if (x < (sl).length) {
              nc, nv = sl[x]
              curr -= d*nc*nv
      if (d != 1) {
          sl.remove((-cnt[v], -v))
      return curr;
}

export { findXSum };
