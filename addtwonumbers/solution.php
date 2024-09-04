/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function addTwoNumbers($l1, $l2) {
        // let me generate the dummy cover of the result list at least
        $dummyHead = new ListNode(0);
        $current = $dummyHead;
        $carry = 0;

        // now i will loop through the lists until i reach both ends, so
        while ($l1 !== null || $l2 !== null) {
            // i want to get current vales and allow it use 0 once the list ends sha 
            $x = ($l1 !== null) ? $l1->val : 0;
            $y = ($l2 !== null) ? $l2->val : 0;

            // next i have to calculate the sum of the current digits plus the carry in fact
            $sum = $carry + $x + $y;
            $carry = intval($sum / 10);
            $current->next = new ListNode($sum % 10);
            $current = $current->next;

            // time to move the next nodes in the list completely, so
            if ($l1 !== null) $l1 = $l1->next;
            if ($l2 !== null) $l2 = $l2->next;
        }

        // since i am done, let me check if any remaining carry dey
        if ($carry > 0) {
            $current->next = new ListNode($carry);
        }

        return $dummyHead->next;        
    }
}

// since i am done with the list, i need to create a linked list from any array i can get:
function createLinkedList($arr) {
    $dummyHead = new ListNode(0);
    $current = $dummyHead;
    foreach ($arr as $num) {
        $current->next = new ListNode($num);
        $current = $current->next;
    }
    return $dummyHead->next;
}

// now that is done, i need to convert the linked list to an array
function linkedListToArray($node) {
    $result = [];
    while ($node !== null) {
        $result[] = $node->val;
        $node = $node->next;
    }
    return $result;
}

// so the question is 2,4,3 and 5, 6, 4
$l1 = createLinkedList([2, 4, 3]);
$l2 = createLinkedList([5, 6, 4]);

$solution = new Solution();
$result = $solution->addTwoNumbers($l1, $l2);
print_r(linkedListToArray($result)); 