function trafficSignal(timer: any): boolean | number | string | any {
  """
  :type timer: int
  :rtype: str
  """
  if (timer == 0) {
      return "Green";
  } else if (timer == 30:
      return "Orange";
  } else if (30 < timer <= 90:
      return "Red";
  return "Invalid";
}

export { trafficSignal };
