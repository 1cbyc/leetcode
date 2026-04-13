function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current = head;

    while (current) {
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
}
