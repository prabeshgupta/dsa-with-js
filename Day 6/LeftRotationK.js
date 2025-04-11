let k = 7
let arr = [1, 2, 3, 4, 5]
// If 5 % 5 = 0 then loop don't work, if 6 % 5 then loop works one time
k = k % arr.length
for (let i = 0; i < k; i++) {
    let start = arr[0]
    for (let j = 0; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1]
    }
    arr[arr.length - 1] = start
}
console.log(arr)
