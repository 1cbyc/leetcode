function xorOperation(n: any, start: any): boolean | number | string | any {
  """
  :type n: int
  :type start: int
  :rtype: int
  """
  def xorNums(n, start):
      def xorNumsBeginEven(n, start):
          assert(start%2 == 0)
          # 2*i ^ (2*i+1) = 1
          return ((n//2)%2)^((start+n-1) if n%2 else 0);
}

export { xorOperation };
