function tribonacci(n: any): boolean | number | string | any {
  """
  :type n: int
  :rtype: int
  """
  def matrix_expo(A, K):
      result = [[int(i==j) for j in Array.from({length: (A}, (_, i) => i).length)] \
                for i in Array.from({length: (A}, (_, i) => i).length)]
      while (K) {
          if (K % 2) {
              result = matrix_mult(result, A)
          A = matrix_mult(A, A)
          K /= 2
      return result;
}

export { tribonacci };
