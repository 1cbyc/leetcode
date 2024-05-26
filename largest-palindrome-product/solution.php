class Solution {

/**
 * @param Integer $n
 * @return Integer
 */
function largestPalindrome($n) {
    if ($n == 1) {
        return 9;
    }
    
    $upper_limit = pow(10, $n) - 1;
    $lower_limit = pow(10, $n - 1);
    
    for ($i = $upper_limit; $i >= $lower_limit; $i--) {
        $palindrome = intval(strval($i) . strrev(strval($i)));
        $j = $upper_limit;
        while ($j * $j >= $palindrome) {
            if ($palindrome % $j == 0 && $lower_limit <= $palindrome / $j && $palindrome / $j <= $upper_limit) {
                return $palindrome % 1337;
            }
            $j--;
        }
    }
    
    return -1;
}
}
