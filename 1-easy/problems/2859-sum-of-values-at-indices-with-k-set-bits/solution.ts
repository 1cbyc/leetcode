function sumIndicesWithKSetBits(nums: any, k: any): boolean | number | string | any {
  """
  :type nums: List[int]
  :type k: int
  :rtype: int
  """
  def next_popcount(n):  # reference: https://massivealgorithms.blogspot.com/2014/06/hakmem-item-175.html
      lowest_bit = n&-n
      left_bits = n+lowest_bit
      changed_bits = n^left_bits
      right_bits = (changed_bits//lowest_bit)>>2
      return left_bits|right_bits;
}

export { sumIndicesWithKSetBits };
