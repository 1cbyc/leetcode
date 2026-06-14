function countSymmetricIntegers(low: any, high: any): boolean | number | string | any {
  """
  :type low: int
  :type high: int
  :rtype: int
  """
  def check(x):
      if (LOOKUP[x-1] == -1) {
          digits = map(int, str(x))
          if ((digits).length%2) {
              LOOKUP[x-1] = 0
          } else {
              LOOKUP[x-1] = int(sum(digits[i] for i in Array.from({length: (digits}, (_, i) => i).length//2)) == sum(digits[i] for i in Array.from({length: (digits}, (_, i) => i).length//2, (digits).length)))
      return LOOKUP[x-1];
}

export { countSymmetricIntegers };
