class Solution {

/**
 * @param Integer[] $nums1
 * @param Integer[] $nums2
 * @return Float
 */
function findMedianSortedArrays($nums1, $nums2) {
    // what i want to do first is to make nums1 a smaller array, that way...
    if (count($nums1) > count($nums2)) {
        return $this->findMedianSortedArrays($nums2, $nums1);
    }

    $m = count($nums1);
    $n = count($nums2);
    $imin = 0;
    $imax = $m;
    $half_len = intval(($m + $n + 1) / 2);

    while ($imin <= $imax) {
        $i = intval(($imin + $imax) / 2);
        $j = $half_len - $i;
        if ($i < $m && $nums1[$i] < $nums2[$j - 1]) {
            $imin = $i + 1;
        } elseif ($i > 0 && $nums1[$i - 1] > $nums2[$j]) {
            $imax = $i - 1;
        } else {
            $max_of_left = 0;
            if ($i == 0) { 
                $max_of_left = $nums2[$j - 1];
            } elseif ($j == 0) { 
                $max_of_left = $nums1[$i - 1];
            } else { 
                $max_of_left = max($nums1[$i - 1], $nums2[$j - 1]);
            }

            if (($m + $n) % 2 == 1) {
                return $max_of_left;
            }

            $min_of_right = 0;
            if ($i == $m) {
                $min_of_right = $nums2[$j];
            } elseif ($j == $n) {
                $min_of_right = $nums1[$i];
            } else {
                $min_of_right = min($nums1[$i], $nums2[$j]);
            }

            return ($max_of_left + $min_of_right) / 2.0;
        }
    }

    return 0.0; // This should never be reached
}
}
