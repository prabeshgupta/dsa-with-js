// Sieve of Eratosthenes - For prime numbers
//Time complexity - nlog(log(n))
let n = 100
let arr = new Array(n + 1).fill(true)

for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (arr[i]) {
        //Making multiples false
        for (let j = i * i; j <= n; j = j + i) {
            arr[j] = false
        }
    }
}

let count = 0
for (let i = 2; i < arr.length; i++) {
    if (arr[i]) {
        count++
        process.stdout.write(i + " ")
    }
}
console.log(count)
