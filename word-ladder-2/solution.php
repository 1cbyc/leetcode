// i fucked it up

class Solution {

/**
 * @param String $beginWord
 * @param String $endWord
 * @param String[] $wordList
 * @return String[][]
 */
function findLadders($beginWord, $endWord, $wordList) {
    $wordSet = array_flip($wordList);  // used the array flip to simulate a set
    if (!isset($wordSet[$endWord])) {
        return [];
    }

    $queue = new SplQueue();
    $queue->enqueue([$beginWord]);
    $results = [];
    $found = false;
    $visited = [];

    while (!$queue->isEmpty() && !$found) {
        $levelVisited = [];

        for ($i = $queue->count(); $i > 0; $i--) {
            $path = $queue->dequeue();
            $word = end($path);

            foreach ($this->getNextWords($word, $wordSet) as $nextWord) {
                if (isset($visited[$nextWord])) {
                    continue;
                }

                $newPath = $path;
                $newPath[] = $nextWord;

                if ($nextWord === $endWord) {
                    $results[] = $newPath;
                    $found = true;
                } else {
                    $queue->enqueue($newPath);
                    $levelVisited[$nextWord] = true;
                }
            }
        }

        foreach ($levelVisited as $word => $val) {
            $visited[$word] = true;
        }
    }

    return $results;
}

private function getNextWords($word, $wordSet) {
    $nextWords = [];
    $wordArray = str_split($word);
    for ($i = 0; $i < count($wordArray); $i++) {
        $originalChar = $wordArray[$i];
        for ($c = ord('a'); $c <= ord('z'); $c++) {
            $wordArray[$i] = chr($c);
            $newWord = implode('', $wordArray);
            if ($newWord !== $word && isset($wordSet[$newWord])) {
                $nextWords[] = $newWord;
            }
        }
        $wordArray[$i] = $originalChar;
    }
    return $nextWords;
}
}
