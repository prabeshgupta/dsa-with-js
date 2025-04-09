let n = prompt('What is the number?')

if (n === null) {
    console.log("Canceled")
}

n = Number(n)

if (isNaN(n)) {
    console.log("Enter valid input")
} else {
    if (n > 0) {
        console.log(isPrime(n) ? "Prime" : "Not Prime")
    } else {
        console.log("0 or Negative Number is allowed")
    }
}

function isPrime(n) {
    if (n <= 1) return false; // Numbers <= 1 are not prime
    if (n === 2) return true; // 2 is the only even prime number

    // Skip even numbers greater than 2
    if (n % 2 === 0) return false;

    // Suppose sq. root of 37 => 6.08 => 6, we check from 2 to 6 if it's divisible by those number or not. If it's not divisible then number higher than sq. root can't divide the number. Eg, 59

    // Check divisibility for odd numbers from 3 to sqrt(n)
    for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}
