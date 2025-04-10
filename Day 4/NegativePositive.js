let arr = [6, -7, -66, 94, 83, 68, -35, 74, 68, 77, -22]
let i = 0, j = 0, temp = 0

while (i < arr.length) {
    if (arr[i] < 0) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j++
    }
    i++
}

console.log(arr)