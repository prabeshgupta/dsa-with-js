/*
      *
     * *
    * * *
   * * * *
  * * * * *
*/
let prompt = require('prompt-sync')()
let n = Number(prompt("Enter a number "))
for (let i = 1; i <= n; i++) {
    for (let j = n - 1; j >= i; j--) {
        process.stdout.write(" ")
    }
    for (let k = 1; k <= i; k++) {
        process.stdout.write(" *")
    }
    console.log()
}
