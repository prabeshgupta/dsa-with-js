// Array must be sorted
// Time complexity is log(n)
let arr = [1, 4, 7, 13, 36, 94, 194, 729, 3981, 29842]
let first = 0
let last = arr.length - 1
let target = 13

let binarySearch = (arr, first, last, target) => {
    //If first is greater than last then stop loop
    while (first <= last) {
        let mid = Math.floor((first + last) / 2)
        if (arr[mid] == target) return mid
        else if (arr[mid] > target) last = mid - 1
        else first = mid + 1
    }
    //If element not found
    return -1
}

let index = binarySearch(arr, first, last, target)
index < 0 ? console.log("Element not found.") : console.log("Element found at " + index + " index.")