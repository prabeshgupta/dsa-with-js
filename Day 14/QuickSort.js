// Quick Sort - Pivot and Partition - All elements smaller than pivot goes to left and all elements bigger than pivot goes to right
// Pivot element we assume first, mid or last
// Time Complexity: O(n log n) on average, O(n^2) in the worst case

let arr = [3, 73, 54, 23, 26, 71, 43, 6]
quickSort(arr, 0, arr.length - 1)
console.log(arr)

function findPivot(arr, first, last) { // O(n)
    let pivot = arr[first], i = first + 1, j = last;
    while (i <= j) {
        // Increment i if current element is smaller than pivot element
        while (arr[i] <= pivot && i <= last) i++;
        // Decrement j if current element is greater than pivot element
        while (arr[j] > pivot && j >= first) j--;

        // When i and j stop, puts large numbers to the right, and small ones to the left of the pivot before they cross.
        //Once they cross, we stop and place the pivot in the middle.
        if (i < j) {
            swap(arr, i, j);
        }
    }
    // The moment i is bigger than j, swap pivot with j
    swap(arr, j, first);
    return j;
}

function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function quickSort(arr, first, last) { //O(logn)
    if (first >= last) return arr
    let pivotIndex = findPivot(arr, first, last)
    quickSort(arr, first, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, last)
    return arr
}
