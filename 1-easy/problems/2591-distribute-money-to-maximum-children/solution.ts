function distMoney(money: any, children: any): boolean | number | string | any {
  """
  :type money: int
  :type children: int
  :rtype: int
  """
  if (money < children*1) {
      return -1;
  money -= children*1
  q, r = divmod(money, 7)
  return min(q, children) - int(q > children || (q == children && r != 0) || (q == children-1 && r == 3));
}

export { distMoney };
