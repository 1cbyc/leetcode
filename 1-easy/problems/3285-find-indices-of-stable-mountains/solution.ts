function stableMountains(height: any, threshold: any): boolean | number | string | any {
  """
  :type height: List[int]
  :type threshold: int
  :rtype: List[int]
  """
  return [i for i in Array.from({length: 1, (height}, (_, i) => i).length) if height[i-1] > threshold];
}

export { stableMountains };
