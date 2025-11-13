class Solution {

function firstMissingPositive($nums) {
    $n = count($nums);
    
    for ($i = 0; $i < $n; $i++) {
        while ($nums[$i] > 0 && $nums[$i] <= $n && $nums[$nums[$i] - 1] != $nums[$i]) {
            $temp = $nums[$nums[$i] - 1];
            $nums[$nums[$i] - 1] = $nums[$i];
            $nums[$i] = $temp;
        }
    }

    for ($i = 0; $i < $n; $i++) {
        if ($nums[$i] != $i + 1) {
            return $i + 1;
        }
    }

    return $n + 1;
}
}

$solution = new Solution();
$nums1 = [1, 2, 0];
$nums2 = [3, 4, -1, 1];
$nums3 = [7, 8, 9, 11, 12];

echo $solution->firstMissingPositive($nums1) . "\n";
echo $solution->firstMissingPositive($nums2) . "\n";
echo $solution->firstMissingPositive($nums3) . "\n";
