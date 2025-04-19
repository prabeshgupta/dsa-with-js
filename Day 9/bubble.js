let arr = [13, 45, 7, 32, 4]
// Outer loop controls phases
// If 4 elements are sorted out of 5 then last element is automatically sorted
// If there are n numbers then there are n-1 phase
//It denotes phases
let n = arr.length
for (let i = 0; i < n - 1; i++) {
    //Inner loop swaps or pass the bubble
    //It denotes operations
    for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
}
console.log(arr)