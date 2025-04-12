let arr = [1, 2, 3, 4, 5]
let k = 2
k = k % arr.length
rotation(0, k - 1)
rotation(k, arr.length - 1)
rotation(0, arr.length - 1)

function rotation(i, j) {
    while (i < j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}

console.log(arr)