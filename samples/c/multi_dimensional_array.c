#include <stdio.h>

int main()
{
    int tab[2][2][2] = {
        {{1, 2}, {3, 4}},
        {{5, 6}, {7, 8}},
        {{9, 10}, {11, 12}}
    };

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 2; k++) {
                tab[i][j][k] = tab[i][j][k] + 1;
                printf("%d ", tab[i][j][k]);
            }
        }

    }

    return 0;
}
