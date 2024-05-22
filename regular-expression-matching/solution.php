class Solution {

/**
 * @param String $s
 * @param String $p
 * @return Boolean
 */
function isMatch($s, $p) {
    $memo = [];
    // return $this->helper($s, $p, 0, 0, []);
    return $this->helper($s, $p, 0, 0, $memo);    
}

function helper($s, $p, $i, $j, &$memo) {
    if (isset($memo[$i][$j])) {
        return $memo[$i][$j];
    }

    if ($j >= strlen($p)) {
        return $memo [$i][$j] = ($i >= strlen($s));
    }

    $match = ($i < strlen($s) && ($s[$i] == $p[$j] || $p[$j] == '.'));

    if ($j + 1 < strlen($p) && $p[$j +1] == '*') {
        $memo[$i][$j] = $this->helper($s, $p, $i, $j +2, $memo) || ($match && $this->helper($s, $p, $i + 1, $j, $memo));            
    } else {
        $memo[$i][$j] = $match && $this->helper($s, $p, $i + 1, $j + 1, $memo);
    }

    return $memo[$i][$j];
}
}

// trying to use the examples they gave in the question (it is not needed tho):
// $solution = new Solution();
// var_dump($solution->isMatch("aa", "a")); // this is false as added in the question
// var_dump($solution->isMatch("aa", "a*")); // this is true as stated in the question
// var_dump($solution->isMatch("aa", ".*")); // this is also boot(true) as stated in the question, if you dont get that, it means you scattered my code