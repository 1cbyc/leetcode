function deleteNode(node: ListNode): void {
    node.val = node.next!.val;
    node.next = node.next!.next;
}
