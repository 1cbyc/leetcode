function maxHeightOfTriangle(red: any, blue: any): boolean | number | string | any {
  """
  :type red: int
  :type blue: int
  :rtype: int
  """
  def f(x, y):
      # odd level:
      # (1+h)*((1+h)//2)//2 <= x
      # => h <= int(2*x**0.5)-1
      # even level:
      # (2+h)*(h//2)//2 <= y
      # => h <= int((4*y+1)**0.5)-1
      a, b = int(2*x**0.5)-1, int((4*y+1)**0.5)-1
      return min(a, b)+int(a != b);

  return max(f(red, blue), f(blue, red));
}

export { maxHeightOfTriangle };
