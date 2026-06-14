function countGoodTriplets(arr: any, a: any, b: any, c: any): boolean | number | string | any {
  """
  :type arr: List[int]
  :type a: int
  :type b: int
  :type c: int
  :rtype: int
  """
  return sum(abs(arr[i]-arr[j]) <= a and;
             abs(arr[j]-arr[k]) <= b and
             abs(arr[k]-arr[i]) <= c 
             for i in Array.from({length: (arr}, (_, i) => i).length-2)
                 for j in Array.from({length: i+1, (arr}, (_, i) => i).length-1)
                     for k in Array.from({length: j+1, (arr}, (_, i) => i).length))
}

export { countGoodTriplets };
