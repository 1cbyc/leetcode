<?php

class Solution
{
    public function maximalSquare($matrix)
    {
        if (empty($matrix) || empty($matrix[0])) {
            return 0;
        }

        $rows = count($matrix);
        $cols = count($matrix[0]);
        $dp = array_fill(0, $cols, 0);
        $best = 0;

        for ($r = 0; $r < $rows; $r++) {
            $prevDiagonal = 0;
            for ($c = 0; $c < $cols; $c++) {
                $temp = $dp[$c];

                if ($matrix[$r][$c] === '1') {
                    $left = $c > 0 ? $dp[$c - 1] : 0;
                    $dp[$c] = min($left, $dp[$c], $prevDiagonal) + 1;
                    if ($dp[$c] > $best) {
                        $best = $dp[$c];
                    }
                } else {
                    $dp[$c] = 0;
                }

                $prevDiagonal = $temp;
            }
        }

        return $best * $best;
    }
}

