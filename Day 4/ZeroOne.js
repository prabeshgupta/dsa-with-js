let arr = [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
// Start i and j together, i will increment each time, if i face 0 then it swaps value with j and increment j
let i = 0, j = 0, temp = 0

while (i < arr.length) {
    if (arr[i] == 0) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j++
    }
    i++
}
console.log(arr)