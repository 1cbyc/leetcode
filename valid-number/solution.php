class Solution {

function isNumber($s) {
    $pattern = '/^[+-]?((\d+(\.\d*)?)|(\.\d+))([eE][+-]?\d+)?$/';
    
    return preg_match($pattern, $s) === 1;
}
}

$solution = new Solution();

echo $solution->isNumber("0") ? 'true' : 'false';
echo $solution->isNumber("e") ? 'true' : 'false';
echo $solution->isNumber(".") ? 'true' : 'false';
echo $solution->isNumber("0.1") ? 'true' : 'false';
echo $solution->isNumber("-0.1") ? 'true' : 'false';
echo $solution->isNumber("3.") ? 'true' : 'false';
echo $solution->isNumber("2e10") ? 'true' : 'false';
echo $solution->isNumber("3.14e-10") ? 'true' : 'false';
echo $solution->isNumber(" ") ? 'true' : 'false';
echo $solution->isNumber("abc") ? 'true' : 'false';
echo $solution->isNumber("95a54e53") ? 'true' : 'false';
