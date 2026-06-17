import heapq
from typing import List, Optional


class ListNode:
    def __init__(self, val: int = 0, next: "Optional[ListNode]" = None) -> None:
        self.val = val
        self.next = next


class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        heap: List[tuple[int, int, ListNode]] = []
        for index, node in enumerate(lists):
            if node is not None:
                heapq.heappush(heap, (node.val, index, node))

        dummy = ListNode()
        tail = dummy

        while heap:
            _, index, node = heapq.heappop(heap)
            tail.next = node
            tail = node
            if node.next is not None:
                heapq.heappush(heap, (node.next.val, index, node.next))

        return dummy.next


def build(values: List[int]) -> Optional[ListNode]:
    dummy = ListNode()
    tail = dummy
    for value in values:
        tail.next = ListNode(value)
        tail = tail.next
    return dummy.next


def to_list(node: Optional[ListNode]) -> List[int]:
    result = []
    while node is not None:
        result.append(node.val)
        node = node.next
    return result


if __name__ == "__main__":
    solution = Solution()

    assert to_list(solution.mergeKLists([build([1, 4, 5]), build([1, 3, 4]), build([2, 6])])) == [
        1, 1, 2, 3, 4, 4, 5, 6,
    ]
    assert to_list(solution.mergeKLists([])) == []
    assert to_list(solution.mergeKLists([build([])])) == []

    print("All tests passed!")
