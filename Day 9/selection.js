let arr = [83, 36, 46, 6, 61, 48, 9]
let n = arr.length
for (let i = 0; i < n - 1; i++) {
    // We focus on index
    let minIndex = i
    for (let j = i + 1; j < n; j++) {
        if (arr[minIndex] > arr[j]) {
            minIndex = j
        }
    }
    if (minIndex != i) {
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
}
console.log(arr)