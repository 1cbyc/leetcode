function minMovesToSeat(seats: any, students: any): boolean | number | string | any {
  """
  :type seats: List[int]
  :type students: List[int]
  :rtype: int
  """
  seats.sort()
  students.sort()
  return sum(abs(a-b) for a, b in itertools.izip(seats, students));
}

export { minMovesToSeat };
