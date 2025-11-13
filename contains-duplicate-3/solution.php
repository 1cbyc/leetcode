class Solution {

function containsNearbyAlmostDuplicate($nums, $indexDiff, $valueDiff) {
    $window = [];

    for ($i = 0; $i < count($nums); $i++) {
        $pos = $this->binarySearch($window, $nums[$i]);

        if ($pos < count($window) && abs($window[$pos] - $nums[$i]) <= $valueDiff) {
            return true;
        }
        if ($pos > 0 && abs($window[$pos - 1] - $nums[$i]) <= $valueDiff) {
            return true;
        }

        array_splice($window, $pos, 0, $nums[$i]);

        if (count($window) > $indexDiff) {
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
