function fibo(n, first, second) {
    if (n == 0) return
    let third = first + second
    process.stdout.write(third + " ")
    fibo(n - 1, second, third)
}
let n = 10
process.stdout.write(0 + " " + 1 + " ")
fibo(n - 2, 0, 1)