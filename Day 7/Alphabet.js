let prompt = require('prompt-sync')();
let input = Number(prompt("Enter a number "))
for (let i = 1; i <= input; i++) {
    let ascii = 65
    for (let j = 1; j <= i; j++) {
        process.stdout.write(String.fromCharCode(ascii++) + " ")
    }
    console.log();
}