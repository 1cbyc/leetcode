<?php
class Solution {
    private $digitToLetters = [
        '2' => ['a', 'b', 'c'],
        '3' => ['d', 'e', 'f'],
        '4' => ['g', 'h', 'i'],
        '5' => ['j', 'k', 'l'],
        '6' => ['m', 'n', 'o'],
        '7' => ['p', 'q', 'r', 's'],
        '8' => ['t', 'u', 'v'],
        '9' => ['w', 'x', 'y', 'z'],
    ];

    /**
     * @param String $digits
     * @return String[]
     */
    function letterCombinations($digits) {
        if (empty($digits)) {
            return [];
        }

        return $this->generateCombinations($digits);
    }

    private function generateCombinations($digits) {
        if (empty($digits)) {
            return [""];
        }

        $currentDigit = $digits[0];
        $remainingDigits = substr($digits, 1);
        $currentLetters = $this->digitToLetters[$currentDigit];
        $combinationsForRemaining = $this->generateCombinations($remainingDigits);

        $result = [];
        foreach ($currentLetters as $letter) {
            foreach ($combinationsForRemaining as $combination) {
                $result[] = $letter . $combination;
            }
        }

        return $result;
    }
}

$solution = new Solution();
print_r($solution->letterCombinations("23"));
print_r($solution->letterCombinations(""));
print_r($solution->letterCombinations("2"));
?>
