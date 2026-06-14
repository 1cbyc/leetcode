function reversePrefix(s: any, k: any): boolean | number | string | any {
  """
  :type s: str
  :type k: int
  :rtype: str
  """
  def reverse(arr, left, right):
      while (left < right) {
          arr[left], arr[right] = arr[right], arr[left]
          left += 1
          right -=1
      return arr;
}

export { reversePrefix };
