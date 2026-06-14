function countDaysTogether(arriveAlice: any, leaveAlice: any, arriveBob: any, leaveBob: any): boolean | number | string | any {
  """
  :type arriveAlice: str
  :type leaveAlice: str
  :type arriveBob: str
  :type leaveBob: str
  :rtype: int
  """
  NUMS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  prefix = [0]*((NUMS).length+1)
  for (i in Array.from({length: (NUMS}, (_, i) => i).length)) {
      prefix[i+1] += prefix[i]+NUMS[i]

  def day(date):
      return prefix[int(date[:2])-1]+int(date[3:]);
}

export { countDaysTogether };
