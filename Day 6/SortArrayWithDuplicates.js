let arr = [0, 0, 0, 1, 3, 3, 6, 7, 8, 8, 9, 9, 9]
let j = 1

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
        arr[j] = arr[i + 1]
        j++
    }
}
console.log(arr)