function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let cur = dummy;
    while (list1 && list2) {
        if (list1.val <= list2.val) { cur.next = list1; list1 = list1.next; }
        else { cur.next = list2; list2 = list2.next; }
        cur = cur.next!;
    }
    cur.next = list1 ?? list2;
    return dummy.next;
}
