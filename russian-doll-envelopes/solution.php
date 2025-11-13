class Solution {

function maxEnvelopes($envelopes) {
    $n = count($envelopes);
    if ($n == 0) return 0;
    
    usort($envelopes, function($a, $b) {
        if ($a[0] == $b[0]) return $b[1] - $a[1];
        return $a[0] - $b[0];
    });
    
    $dp = array_fill(0, $n, 1);
    $maxEnvelopes = 1;
    
    for ($i = 1; $i < $n; $i++) {
        for ($j = 0; $j < $i; $j++) {
            if ($envelopes[$i][1] > $envelopes[$j][1]) {
                $dp[$i] = max($dp[$i], $dp[$j] + 1);
            }
        }
        $maxEnvelopes = max($maxEnvelopes, $dp[$i]);
    }
    
    return $maxEnvelopes;
}
}
