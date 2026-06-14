function convertTemperature(celsius: any): boolean | number | string | any {
  """
  :type celsius: float
  :rtype: List[float]
  """
  return [celsius+273.15, celsius*1.80+32.00];
}

export { convertTemperature };
