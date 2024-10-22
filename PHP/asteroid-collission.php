class Solution {

/**
 * @param Integer[] $asteroids
 * @return Integer[]
 */
function asteroidCollision($asteroids) {
    $stack = [];
    foreach ($asteroids as $asteroid) {
        $crush = 1;
        while ($crush > 0 && $asteroid < 0 && !empty($stack) && end($stack) > 0) {
            $crush = -1 * $asteroid <=> end($stack);
            if ($crush >= 0) { 
                array_pop($stack); 
            }
        }
        if ($crush > 0) {
            array_push($stack, $asteroid);
        }
    }
    return $stack;
}
}