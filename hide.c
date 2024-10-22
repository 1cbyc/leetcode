#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main() {
    while (1) {
        system("git add .");

        system("git commit -m 'solving all leetcode problems'");

        system("git push");

        sleep(12);
    }

    return 0;
}
