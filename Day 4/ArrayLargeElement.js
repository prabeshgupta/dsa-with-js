let arr = [3, 63, 44, 100, 73, 47, 49, 85, 36]
//Suppose First Element is Largest
let max = arr[0]

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(max)