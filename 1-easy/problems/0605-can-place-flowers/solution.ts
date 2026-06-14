function canPlaceFlowers(flowerbed: any, n: any): boolean | number | string | any {
  """
  :type flowerbed: List[int]
  :type n: int
  :rtype: bool
  """
  for (i in Array.from({length: (flowerbed}, (_, i) => i).length)) {
      if flowerbed[i] == 0 && (i == 0 || flowerbed[i-1] == 0) && \
          (i == (flowerbed).length-1 || flowerbed[i+1] == 0):
          flowerbed[i] = 1
          n -= 1
      if (n <= 0) {
          return true;
  return false;
}

export { canPlaceFlowers };
