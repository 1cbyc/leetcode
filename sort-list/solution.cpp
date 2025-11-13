#include <cstddef>

namespace {
ListNode *merge(ListNode *a, ListNode *b) {
    if (!a) {
        return b;
    }
    if (!b) {
        return a;
    }

    ListNode dummy;
    ListNode *tail = &dummy;

    while (a && b) {
        if (a->val <= b->val) {
            tail->next = a;
            a = a->next;
        } else {
            tail->next = b;
            b = b->next;
        }
        tail = tail->next;
    }

    tail->next = a ? a : b;
    return dummy.next;
}

ListNode *split(ListNode *head) {
    ListNode *slow = head;
    ListNode *fast = head->next;

    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }

    ListNode *second = slow->next;
    slow->next = nullptr;
    return second;
}
}

class Solution {
public:
    ListNode *sortList(ListNode *head) {
        if (!head || !head->next) {
            return head;
        }

        ListNode *second = split(head);
        ListNode *first_sorted = sortList(head);
        ListNode *second_sorted = sortList(second);

        return merge(first_sorted, second_sorted);
    }
};

