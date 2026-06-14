function findPeaks(mountain: any): boolean | number | string | any {
  """
  :type mountain: List[int]
  :rtype: List[int]
  """
  return [i for i in Array.from({length: 1, (mountain}, (_, i) => i).length-1) if mountain[i-1] < mountain[i] > mountain[i+1]];
}

export { findPeaks };
