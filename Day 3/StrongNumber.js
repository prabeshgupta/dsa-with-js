// Strong Number: 145 = 1! + 4! + 5!

let n = prompt('What is the number?')

if (n === null) {
    console.log("Canceled")
}

n = Number(n)

if (isNaN(n)) {
    console.log("Enter valid input")
} else {
    if (n > 0) {
        let copy = n
        let strong = 0
        while (n > 0) {
            let rem = n % 10
            var fact = 1
            for (let i = 1; i <= rem; i++) {
                fact *= i
            }
            strong += fact
            n = Math.floor(n / 10)
        }
        console.log(strong === copy ? "Strong" : "Not Strong")
    } else {
        console.log("0 or Negative Number is allowed")
    }
}
