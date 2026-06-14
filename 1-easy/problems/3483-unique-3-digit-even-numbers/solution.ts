function totalNumbers(digits: any): boolean | number | string | any {
  """
  :type digits: List[int]
  :rtype: int
  """
  cnt = [0]*10
  for (x in digits) {
      cnt[x] += 1
  even = sum(cnt[i] != 0 for i in Array.from({length: 0, (cnt}, (_, i) => i).length, 2))
  odd = sum(cnt[i] != 0 for i in Array.from({length: 1, (cnt}, (_, i) => i).length, 2))
  result = 0
  # 3 same digits
  for (i in Array.from({length: 2, (cnt}, (_, i) => i).length, 2)) {
      if (cnt[i] >= 3) {
          result += 1  # eee
  # 3 distinct digits
  result += even*(odd+even-1)*(odd+even-2)  # xye
  if (cnt[0]) {
      result -= 1*(even-1)*(odd+even-2)  # 0xe
  # 2 same digits, 1 different digit
  for (i in Array.from({length: (cnt}, (_, i) => i).length)) {
      if (cnt[i] < 2) {
          continue
      if (i == 0) {
          result += (odd+even)-1  # x00
      } else if (i%2:
          result += even  # ooe
      } else {
          result += 3*(even-1)-int(cnt[0] != 0)  # eeE, eEe, Eee excluding 0ee
          result += 2*odd  # eoe, oee
  return result;
}

export { totalNumbers };
