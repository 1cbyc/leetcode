function findDelayedArrivalTime(arrivalTime: any, delayedTime: any): boolean | number | string | any {
  """
  :type arrivalTime: int
  :type delayedTime: int
  :rtype: int
  """
  return (arrivalTime + delayedTime)%24;
}

export { findDelayedArrivalTime };
