function gcdOfOddEvenSums(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  # gcd((1+(2n-1))*n/2, (2+2n)*n/2) = gcd(n*n, n*(n+1)) = n * gcd(n, n+1) = n
  return n;
}

export { gcdOfOddEvenSums };
