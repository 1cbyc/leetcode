class Solution {

/**
 * @param String $s
 * @param String $p
 * @return Boolean
 */
function isMatch($s, $p) {
    $m = strlen($s);
    $n = strlen($p);

    // since i have defined the values of m and n as th length of s and p, i would create a DP table with (m+1) x (n+1) size
    $dp = array_fill(0, $m + 1, array_fill(0, $n + 1, false));

    // at this point, the base case is literally empty pattern that matches empty string, so
    $dp[0][0] = true;

    // which leaves me to fill the first row for the patterns with * as described in the question, so
    for ($j = 1; $j <= $n; $j++) {
        if ($p[$j - 1] == '*') {
            $dp[0][$j] = $dp[0][$j - 1];
        }
    }

    // now i need to fill the DP table having filled the initial row with *
    for ($i = 1; $i <= $m; $i++) {
        for ($j = 1; $j <= $n; $j++){
            if ($p[$j - 1] == '*') {
                // now made sure * matches the empty sequence i called earlier, and any sequence in fact
                $dp[$i][$j] = $dp[$i][$j - 1] || $dp[$i - 1][$j];
            } elseif ($p[$j - 1] == '?' || $s[$i - 1] == $p[$j - 1]) {
                // also, according to the question ? matches any single character in the solution and can be an exact match too
                $dp[$i][$j] = $dp[$i - 1][$j - 1];
            }
        }
    }

    return $dp[$m][$n];
}
}

// this should run without entering the given examples