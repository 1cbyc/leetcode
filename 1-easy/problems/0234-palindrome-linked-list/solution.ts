function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next;
    }

    let prev: ListNode | null = null;
    while (slow) {
        const nextTemp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextTemp;
    }

    while (prev) {
        if (prev.val !== head!.val) return false;
        prev = prev.next;
        head = head!.next;
    }

    return true;
}
