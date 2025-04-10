//Without extra space or variable

let arr = [1, 3, 4, 6, 7, 9]
//Take first and last index of array
let i = 0
let j = (arr.length - 1)
let temp = 0

// Also, works with i<j
while (i < j) {
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
}
console.log(arr);
