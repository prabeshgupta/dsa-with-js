// Cyclic Sort: Works only for the numbers in the range of 1 to n or 0 to n-1.
// The idea is to place each number at its correct index.
// where n is the length of the array.
// Time Complexity: O(n)
// Space Complexity: O(1)

let arr = [1, 7, 4, 5, 2, 8, 9, 3, 6]
function CyclicSort(arr) {
    let i = 0
    while (i < arr.length) {
        currentIndex = arr[i] - 1 // Current Element - 1
        //In case of range [0,n-1]
        //currentIndex = arr[i]
        if (arr[i] != arr[currentIndex]) {
            let temp = arr[i]
            arr[i] = arr[currentIndex]
            arr[currentIndex] = temp
        } else {
            //We increment i when current element matches with current index
            i++
        }
    }
}
CyclicSort(arr)
console.log(arr)