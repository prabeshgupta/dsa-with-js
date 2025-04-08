// Currency in Nepal
// 1000, 500, 100, 50, 20, 10, 5, 2, 1

let currency = 874

if (currency >= 1000) {
    console.log("1000 Notes : " + Math.floor(currency / 1000))
    currency %= 1000
}
if (currency >= 500) {
    console.log("500 Notes : " + Math.floor(currency / 500))
    currency %= 500
}
if (currency >= 100) {
    console.log("100 Notes : " + Math.floor(currency / 100))
    currency %= 100
}
if (currency >= 50) {
    console.log("50 Notes : " + Math.floor(currency / 50))
    currency %= 50
}
if (currency >= 20) {
    console.log("20 Notes : " + Math.floor(currency / 20))
    currency %= 20
}
if (currency >= 10) {
    console.log("10 Notes : " + Math.floor(currency / 10))
    currency %= 10
}
if (currency >= 5) {
    console.log("5 Notes : " + Math.floor(currency / 5))
    currency %= 5
}
if (currency >= 2) {
    console.log("2 Notes : " + Math.floor(currency / 2))
    currency %= 2
}
if (currency === 1) {
    console.log("1 Note : " + currency)
}