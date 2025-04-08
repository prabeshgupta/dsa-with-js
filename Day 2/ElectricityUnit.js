// Upto 100 units   $1 per unit
// 101 - 200 units  $5 per unit
// 201 - 400 units  $7 per unit
// Beyond 400 units $9 per unit

//Bottom Up Approach

let units = 160
let amount = 0

if (units > 400) {
    amount = (units - 400) * 9
    units = 400
}
if (units > 200 && units <= 400) {
    amount += (units - 200) * 7
    units = 200
}
if (units > 100 && units <= 200) {
    amount += (units - 100) * 5
    units = 100
}
console.log("Total amount : $" + (amount += units * 1))
