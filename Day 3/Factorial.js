//Factorial of number
//Handling edge cases

let n = prompt('What is the number?')

if (n === null) {
    console.log("Canceled")
}

n = Number(n)

if (isNaN(n)) {
    console.log("Enter valid input")
} else {
    if (n > 0) {
        let fact = 1
        for (let i = 1; i <= n; i++) {
            fact *= i
        }
        console.log(fact);
    } else {
        console.log("0 or Negative Number is allowed")
    }
}
