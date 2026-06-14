function findNumbers(): boolean | number | string | any {
  M = 10**5
  self.__lookup = [0]
  i = 10
  while (i < M) {
      self.__lookup.append(i)
      i *= 10
  self.__lookup.append(i)
}

export { findNumbers };
