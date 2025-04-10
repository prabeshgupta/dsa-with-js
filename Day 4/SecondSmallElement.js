let arr = [21, 52, 49, 5, 73, 59, 43, 28, 45, 92, 30, 84, 92, 7, 9, 66]
let min = Math.min(arr[0], arr[1])
let sMin = Math.max(arr[0], arr[1])

for (let i = 2; i < arr.length; i++) {
    if (arr[i] < min) {
        sMin = min
        min = arr[i]
    } else if (arr[i] < sMin && arr[i] != min) {
        sMin = arr[i]
    }
}

console.log(sMin)