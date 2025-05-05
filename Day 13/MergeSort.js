// Merge Sort Algorithm (Divide and Conquer)
// Time Complexity: O(n log n)

let arr = [1]

console.log(divide(arr, 0, arr.length - 1))

function divide(arr, first, last) { //O(logn)
    let mid = Math.floor((first + last) / 2)
    // Base case: if the array has one or no elements, it's already sorted
    if (first >= last) return arr
    // Left part
    divide(arr, first, mid)
    // Right part
    divide(arr, mid + 1, last)
    // Merge
    conquer(arr, first, last, mid)
    return arr // Return the array after merging
}

function conquer(arr, first, last, mid) { //O(n)
    // Create a temporary array
    let temp = new Array(last - first + 1)
    // First part is from 0 to mid, second part is from mid+1 to last
    let i = first, j = mid + 1, k = 0
    while (i <= mid && j <= last) {
        if (arr[i] < arr[j]) {
            temp[k++] = arr[i++]
        } else {
            temp[k++] = arr[j++]
        }
    }
    // For leftover values
    while (i <= mid) {
        temp[k++] = arr[i++]
    }
    while (j <= last) {
        temp[k++] = arr[j++]
    }
    // Placing temp values back to array
    let m = first, n = 0
    while (n < temp.length) {
        arr[m++] = temp[n++]
    }
}