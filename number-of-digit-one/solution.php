class Solution {

/**
 * @param Integer $n
 * @return Integer
 */
function countDigitOne($n) {
    if ($n < 0) return 0;
    
    $count = 0;
    $factor = 1;
    $n_copy = $n;
    
    while ($n_copy > 0) {
        $digit = $n_copy % 10;
        $higher = intval($n_copy / 10);
        $lower = $n % $factor;
        
        $count += $higher * $factor;
        
        if ($digit > 1) {
            $count += $factor;
        } elseif ($digit == 1) {
            $count += $lower + 1;
        }
        
        $factor *= 10;
        $n_copy = intval($n_copy / 10);
    }
    
    return $count;
}
}

$solution = new Solution();
echo $solution->countDigitOne(13);
echo $solution->countDigitOne(0);