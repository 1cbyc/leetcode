function accountBalanceAfterPurchase(purchaseAmount: any): boolean | number | string | any {
  """
  :type purchaseAmount: int
  :rtype: int
  """
  return 100-(purchaseAmount+5)//10*10;
}

export { accountBalanceAfterPurchase };
