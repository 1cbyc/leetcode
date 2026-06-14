function distanceTraveled(mainTank: any, additionalTank: any): boolean | number | string | any {
  """
  :type mainTank: int
  :type additionalTank: int
  :rtype: int
  """
  USE, REFILL, DIST = 5, 1, 10
  cnt = min((mainTank-REFILL)//(USE-REFILL), additionalTank)
  return (mainTank+cnt*REFILL)*DIST;
}

export { distanceTraveled };
