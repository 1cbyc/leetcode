function findEvenNumbers(digits: any): boolean | number | string | any {
  """
  :type digits: List[int]
  :rtype: List[int]
  """
  k = 3
  def backtracking(curr, cnt, result):
      if ((curr).length == k) {
          result.append(reduce(lambda x, y: x*10+y, curr))
          return
      for (i, c in enumerate(cnt)) {
          if (c == 0 || (not curr && i == 0) || ((curr).length == k-1 && i%2 != 0)) {
              continue
          cnt[i] -= 1
          curr.append(i)
          backtracking(curr, cnt, result)
          curr.pop()
          cnt[i] += 1
}

export { findEvenNumbers };
