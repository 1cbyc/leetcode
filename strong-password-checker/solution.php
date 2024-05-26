class Solution {

/**
 * @param String $password
 * @return Integer
 */
function strongPasswordChecker($password) {
    $n = strlen($password);
    
    $hasLower = preg_match('/[a-z]/', $password);
    $hasUpper = preg_match('/[A-Z]/', $password);
    $hasDigit = preg_match('/[0-9]/', $password);
    
    $missingTypes = 3 - ($hasLower + $hasUpper + $hasDigit);
    
    $replacements = 0;
    $oneMod = $twoMod = 0;
    
    $i = 2;
    while ($i < $n) {
        if ($password[$i] == $password[$i - 1] && $password[$i - 1] == $password[$i - 2]) {
            $length = 2;
            while ($i < $n && $password[$i] == $password[$i - 1]) {
                $length++;
                $i++;
            }
            $replacements += intval($length / 3);
            if ($length % 3 == 0) {
                $oneMod++;
            } elseif ($length % 3 == 1) {
                $twoMod++;
            }
        } else {
            $i++;
        }
    }
    
    if ($n < 6) {
        return max($missingTypes, 6 - $n);
    } elseif ($n <= 20) {
        return max($missingTypes, $replacements);
    } else {
        $deletions = $n - 20;
        
        $replacements -= min($deletions, $oneMod);
        $deletions -= min($deletions, $oneMod);
        
        $replacements -= min(intval($deletions / 2), $twoMod);
        $deletions -= min(intval($deletions / 2), $twoMod) * 2;
        
        $replacements -= intval($deletions / 3);
        
        return $n - 20 + max($missingTypes, $replacements);
    }
}
}

$solution = new Solution();
echo $solution->strongPasswordChecker("a") . "\n";
echo $solution->strongPasswordChecker("aA1") . "\n";
echo $solution->strongPasswordChecker("1337C0d3") . "\n";
 