class Solution {

    function addTwoNumbers($l1, $l2) {
        $dummyHead = new ListNode(0);
        $current = $dummyHead;
        $carry = 0;

        while ($l1 !== null || $l2 !== null) {
            $x = ($l1 !== null) ? $l1->val : 0;
            $y = ($l2 !== null) ? $l2->val : 0;

            $sum = $carry + $x + $y;
            $carry = intval($sum / 10);
            $current->next = new ListNode($sum % 10);
            $current = $current->next;

            if ($l1 !== null) $l1 = $l1->next;
            if ($l2 !== null) $l2 = $l2->next;
        }

        if ($carry > 0) {
            $current->next = new ListNode($carry);
        }

        return $dummyHead->next;        
    }
}

function createLinkedList($arr) {
    $dummyHead = new ListNode(0);
    $current = $dummyHead;
    foreach ($arr as $num) {
        $current->next = new ListNode($num);
        $current = $current->next;
    }
    return $dummyHead->next;
}

function linkedListToArray($node) {
    $result = [];
    while ($node !== null) {
        $result[] = $node->val;
        $node = $node->next;
    }
    return $result;
}

$l1 = createLinkedList([2, 4, 3]);
$l2 = createLinkedList([5, 6, 4]);

$solution = new Solution();
$result = $solution->addTwoNumbers($l1, $l2);
print_r(linkedListToArray($result)); 