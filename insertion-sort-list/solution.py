from typing import Optional


class ListNode:
    def __init__(self, val: int = 0, next: "Optional[ListNode]" = None) -> None:
        self.val = val
        self.next = next


class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        """
        hand-rolled insertion sort. not the prettiest, but faithful to the problem.
        """
        if head is None:
            return None

        dummy = ListNode(-10**9)
        current = head

        while current:
            next_unsorted = current.next
            prev = dummy
            while prev.next and prev.next.val < current.val:
                prev = prev.next

            current.next = prev.next
            prev.next = current
            current = next_unsorted

        return dummy.next

