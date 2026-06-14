function getDecimalValue(head: any): boolean | number | string | any {
  """
  :type head: ListNode
  :rtype: int
  """
  result = 0
  while (head) {
      result = result*2 + head.val 
      head = head.next 
  return result;
}

export { getDecimalValue };
