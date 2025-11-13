class Solution {

function maxPoints($points) {
    $n = count($points);
    if ($n <= 2) return $n;
    
    $maxPoints = 1;

    for ($i = 0; $i < $n; $i++) {
        $slopes = [];
        $duplicate = 0;
        $currentMax = 0;

        for ($j = $i + 1; $j < $n; $j++) {
            $dx = $points[$j][0] - $points[$i][0];
            $dy = $points[$j][1] - $points[$i][1];

            if ($dx == 0 && $dy == 0) {
                $duplicate++;
                continue;
            }

            $g = $this->gcd($dx, $dy);
            $dx /= $g;
            $dy /= $g;

            $slope = $dy . '/' . $dx;
            if (!isset($slopes[$slope])) {
                $slopes[$slope] = 0;
            }
            $slopes[$slope]++;
            $currentMax = max($currentMax, $slopes[$slope]);
        }

        $maxPoints = max($maxPoints, $currentMax + $duplicate + 1);
    }

    return $maxPoints;
}

function gcd($a, $b) {
    if ($b == 0) return $a;
    return $this->gcd($b, $a % $b);
}
}

$solution = new Solution();
echo $solution->maxPoints([[1,1],[2,2],[3,3]]);
echo $solution->maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]);