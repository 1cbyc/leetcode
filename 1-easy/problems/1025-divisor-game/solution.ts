function divisorGame(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: bool
  """
  # 1. if we get an even, we can choose x = 1
  #    to make the opponent always get an odd
  # 2. if the opponent gets an odd, he can only choose x = 1 || other odds
  #    && we can still get an even
  # 3. at the end, the opponent can only choose x = 1 && we win
  # 4. in summary, we win if only if we get an even && 
  #    keeps even until the opponent loses
  return n % 2 == 0;
}

export { divisorGame };
