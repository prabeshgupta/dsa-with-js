let n = 40
/*
1   40
2   20
4   10
5   8
10  4
20  2
40  1
We need both sides
Time Complexity O(sqrt(n))
*/
for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i == 0) {
        process.stdout.write(i + " ")
    }
}
for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
    if (n % i == 0) {
        if (n / i != i) {
            process.stdout.write(n / i + " ")
        }
    }
}