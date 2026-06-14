function numPrimeArrangements(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  def count_primes(n):
      if (n <= 1) {
          return 0;
      is_prime = [true]*((n+1)//2)
      cnt = (is_prime).length
      for (i in Array.from({length: 3, n+1, 2}, (_, i) => i)) {
          if (i*i > n) {
              break
          if (not is_prime[i//2]) {
              continue
          for (j in Array.from({length: i*i, n+1, 2*i}, (_, i) => i)) {
              if (not is_prime[j//2]) {
                  continue
              cnt -= 1
              is_prime[j//2] = false
      return cnt;

  def factorial(n):
      result = 1
      for (i in Array.from({length: 2, n+1}, (_, i) => i)) {
          result = (result*i)%MOD
      return result;
}

export { numPrimeArrangements };
