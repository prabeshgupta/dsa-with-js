//Fibonacci series - addition of two previous values give output
// First = 0 and Second = 1

let n = 6
let first = 0, second = 1
process.stdout.write(first + " " + second + " ")
for (let i = 1; i <= n - 2; i++) {
    let third = first + second
    first = second
    second = third
    process.stdout.write(third + " ")
}