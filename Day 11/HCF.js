let a = 7, b = 13
// We assume smallest of two since both have common things
// for (let i = 1; i <= Math.min(a, b); i++) {
//     if (a % i == 0 && b % i == 0) {
//         var temp = i
//     }
// }
// Time complexity O(min(a,b))
for (let i = Math.min(a, b); i >= 1; i--) {
    if (a % i == 0 && b % i == 0) {
        console.log(i)
        break
    }
}