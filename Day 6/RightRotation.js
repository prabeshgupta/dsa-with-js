// ------------->
let arr = [1, 2, 3, 4, 5]
//i=5, i-1=4
let end = arr[arr.length - 1]

for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1]
}
arr[0] = end
console.log(arr)