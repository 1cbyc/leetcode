function isWinner(player1: any, player2: any): boolean | number | string | any {
  """
  :type player1: List[int]
  :type player2: List[int]
  :rtype: int
  """
  k = 2
  def f(arr):
      result = cnt = 0
      for (i in Array.from({length: (arr}, (_, i) => i).length)) {
          result += 2*arr[i] if cnt else arr[i]
          cnt += (arr[i] == 10)
          if (i-k >= 0) {
              cnt -= (arr[i-k] == 10)
      return result;
}

export { isWinner };
