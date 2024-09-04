class Solution {

/**
 * @param Integer[] $nums
 * @param Integer $lower
 * @param Integer $upper
 * @return Integer
 */
function countRangeSum($nums, $lower, $upper) {
    $count = 0;
    $presum = [0];
    
    foreach ($nums as $num) {
        $presum[] = $presum[count($presum) - 1] + $num;
    }
    
    $count = $this->mergeSort($presum, $lower, $upper, 0, count($presum) - 1);
    
    return $count;
}

function mergeSort(&$presum, $lower, $upper, $left, $right) {
    if ($left >= $right) return 0;
    
    $mid = $left + intdiv($right - $left, 2);
    $count = $this->mergeSort($presum, $lower, $upper, $left, $mid) + $this->mergeSort($presum, $lower, $upper, $mid + 1, $right);
    $temp = [];
    $p1 = $p2 = $p3 = $mid + 1;
    
    for ($p1 = $left, $right_start = $mid + 1; $p1 <= $mid; $p1++) {
        while ($p2 <= $right && $presum[$p2] - $presum[$p1] < $lower) $p2++;
        while ($p3 <= $right && $presum[$p3] - $presum[$p1] <= $upper) $p3++;
        $count += $p3 - $p2;
        
        while ($right_start <= $right && $presum[$right_start] < $presum[$p1]) $temp[] = $presum[$right_start++];
        $temp[] = $presum[$p1];
    }
    
    while ($right_start <= $right) $temp[] = $presum[$right_start++];
    
    for ($i = $left, $j = 0; $i <= $right; $i++, $j++) {
        $presum[$i] = $temp[$j];
    }
    
    return $count;
}
}
