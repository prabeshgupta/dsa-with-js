//Prime number
// 1 is not prime number becuase it has only one divisor  i.e 1
// 2 is only even prime numbe
// 7 is prime number becuase it has two divisor i.e. 1 and 7 and not divisible by other numbers

let n = prompt('What is the number?')

if (n === null) {
    console.log("Canceled")
}

n = Number(n)

if (isNaN(n)) {
    console.log("Enter valid input")
} else {
    if (n > 0) {
        var prime = true
        if (n === 1) {
            prime = false
        } else {
            for (var i = 2; i < Math.floor(n / 2); i++) {
                if (n % i === 0) {
                    prime = false
                    break
                }
            }
        }
        console.log(prime ? "Prime" : "Not Prime");
    } else {
        console.log("0 or Negative Number is allowed")
    }
}
