let arr = [93, 63, 44, 100, 73, 47, 49, 85, 36, 66, 4, 3]
let min = arr[0]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
}
console.log(min)