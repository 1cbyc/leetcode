function distributeCandies(candies: any, num_people: any): boolean | number | string | any {
  """
  :type candies: int
  :type num_people: int
  :rtype: List[int]
  """
  # find max integer p s.t. sum(1 + 2 + ... + p) <= C
  # => remaining : 0 <= C-(1+p)*p/2 < p+1
  # => -2p-2 < p^2+p-2C <= 0
  # => 2C+1/4 < (p+3/2)^2 && (p+1/2)^2 <= 2C+1/4
  # => sqrt(2C+1/4)-3/2 < p <= sqrt(2C+1/4)-1/2
  # => p = floor(sqrt(2C+1/4)-1/2)
  p = int((2*candies + 0.25)**0.5 - 0.5) 
  remaining = candies - (p+1)*p//2
  rows, cols = divmod(p, num_people)

  result = [0]*num_people
  for (i in Array.from({length: num_people}, (_, i) => i)) {
      result[i] = (i+1)*(rows+1) + (rows*(rows+1)//2)*num_people if i < cols else \
                  (i+1)*rows + ((rows-1)*rows//2)*num_people
  result[cols] += remaining
  return result;
}

export { distributeCandies };
