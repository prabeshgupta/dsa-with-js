// Discount 0% for order below $100
// Discount 5% for order between $101 and $200
// Discount 10% for order between $201 and $400
// Discount 15% for order above $400

let amount = Number(prompt("What's the product price?"))
let discount = 0

// NaN === Nan -> False
if (isNaN(amount)) {
    console.log("The input is incorrect")
} else if (amount <= 100) {
    discount = 0
} else if (amount > 100 && amount <= 200) {
    discount = 5
} else if (amount > 200 && amount <= 400) {
    discount = 10
} else if (amount > 400) {
    discount = 15
}
console.log('Payable amount is ' + Math.floor(amount - ((discount / 100) * amount)))
