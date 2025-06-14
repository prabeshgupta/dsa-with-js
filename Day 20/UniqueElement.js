// Find the unique in the set given that repeated items are in even number
let arr = [10, 9, 8, 10, 9, 8, 7, 6, 6]
let set = new Set()

for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
        set.delete(arr[i])
    } else {
        set.add(arr[i])
    }
}

console.log(set)