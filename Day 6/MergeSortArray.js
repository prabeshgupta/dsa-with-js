let arr1 = [1, 3, 5, 7, 9]
let arr2 = [2, 4, 6, 8]
let arr3 = new Array(arr1.length + arr2.length)
let i = 0, j = 0, k = 0

while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        arr3[k] = arr1[i]
        k++
        i++
    } else {
        arr3[k++] = arr2[j++]
    }
}

//There could be one array that has been exhausted so we need to simply fill the array 3
while (i < arr1.length) {
    arr3[k++] = arr1[i++]
}

while (j < arr2.length) {
    arr3[k++] = arr2[j++]
}

console.log(arr3)