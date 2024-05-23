class Solution {

/**
 * @param Integer[] $nums
 * @param Integer $indexDiff
 * @param Integer $valueDiff
 * @return Boolean
 */
function containsNearbyAlmostDuplicate($nums, $indexDiff, $valueDiff) {
    $window = []; // would i say for fun? anways, this is the sliding window array

    for ($i = 0; $i < count($nums); $i++) {
        // i will use binary search to find the exact position for me to insert the current number in
        $pos = $this->binarySearch($window, $nums[$i]);

        // checking for possible values within the range
        if ($pos < count($window) && abs($window[$pos] - $nums[$i]) <= $valueDiff) {
            return true;
        }
        if ($pos > 0 && abs($window[$pos - 1] - $nums[$i]) <= $valueDiff) {
            return true;
        }

        // insert the current number in this specific window
        array_splice($window, $pos, 0, $nums[$i]);

        // want to make sure to maintain the window size here
        if (count($window) > $indexDiff) {
            // i removed the oldest element here
            $removeIndex = $this->binarySearch($window, $nums[$i - $indexDiff]);
            array_splice($window, $removeIndex, 1);
        }
    }

    return false;
}

private function binarySearch(&$arr, $num) {
    $left = 0;
    $right = count($arr) - 1;

    while ($left <= $right) {
        $mid = intdiv($left + $right, 2);
        if ($arr[$mid] === $num) {
            return $mid;
        } elseif ($arr[$mid] < $num) {
            $left = $mid + 1;
        } else {
            $right = $mid - 1;
        }
    }

    return $left;
}
}
