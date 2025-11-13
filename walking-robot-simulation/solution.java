class Solution {
    public int robotSim(int[] commands, int[][] obstacles) {
        int multiplier = 60001;
        Set<Integer> obsCordHashes = new HashSet<>();
        for (var obsCord : obstacles) {
            int oneDCord = getOneDCord(obsCord[0], obsCord[1], multiplier);
            obsCordHashes.add(oneDCord);
        }

        int maxDistSq = 0;
        int currDir = 0;
        int currCord[] = {0, 0};
        int dirs[][] = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

        for (var com : commands) {
            if (com > 0) {
                int dir[] = dirs[currDir];
                while (com-- > 0) {
                    int nextX = currCord[0] + dir[0];
                    int nextY = currCord[1] + dir[1];
                    int currOneDCord = getOneDCord(nextX, nextY, multiplier);
                    if (obsCordHashes.contains(currOneDCord)) {
                        break;
                    }
                    currCord[0] = nextX;
                    currCord[1] = nextY;
                }
                maxDistSq = Math.max(maxDistSq, currCord[0] * currCord[0] + currCord[1] * currCord[1]);
            } else {
                if (com == -2) {
                    currDir = (currDir + 3) % 4;
                } else {
                    currDir = (currDir + 1) % 4;
                }
            }
        }
        return maxDistSq;
    }

    private int getOneDCord(int x, int y, int mul) {
        return x + mul * y;
    }
}