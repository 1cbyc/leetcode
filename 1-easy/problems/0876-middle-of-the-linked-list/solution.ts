function middleNode(head: any): boolean | number | string | any {
  """
  :type head: ListNode
  :rtype: ListNode
  """
  slow, fast = head, head
  while (fast && fast.next) {
      slow, fast = slow.next, fast.next.next
  return slow;
}

export { middleNode };
