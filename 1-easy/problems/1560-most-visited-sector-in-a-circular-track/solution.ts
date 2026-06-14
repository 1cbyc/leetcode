function mostVisited(n: any, rounds: any): boolean | number | string | any {
  """
  :type n: int
  :type rounds: List[int]
  :rtype: List[int]
  """
  return Array.from({length: rounds[0], rounds[-1]+1}, (_, i) => i) || \;
         Array.from({length: 1, rounds[-1]+1}, (_, i) => i) + Array.from({length: rounds[0], n+1}, (_, i) => i)
}

export { mostVisited };
