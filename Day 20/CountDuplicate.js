let arr = [10, 3, 5, 6, 10, 1, 3, 5, 5, 7, 10]
let map = new Map()

for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
        map.set(arr[i], map.get(arr[i]) + 1)
    } else {
        map.set(arr[i], 1)
    }
}

console.log(map)