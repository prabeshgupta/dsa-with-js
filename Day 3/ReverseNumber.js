let n = prompt('What is the number?')

if (n === null) {
    console.log("Canceled")
}

n = Number(n)

if (isNaN(n)) {
    console.log("Enter valid input")
} else {
    if (n > 0) {
        var rev = 0
        while (n > 0) {
            let rem = n % 10
            rev = rev * 10 + rem
            n = Math.floor(n / 10)
        }
        console.log(rev)
    } else {
        console.log("0 or Negative Number is allowed")
    }
}
