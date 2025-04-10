let arr = [21, 52, 49, 73, 59, 43, 28, 45, 92, 30, 84, 92]
//Take first two elements
let max = Math.max(arr[0], arr[1])
let sMax = Math.min(arr[0], arr[1])

//Iterate from index 2
for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
        //Put max value in secondMax
        sMax = max
        //Put new value in max
        max = arr[i]
    }
    // It is not full proof there exits repeated value in array so to mitigate it we need additional condition where max should not be equal with arr[i]
    else if (arr[i] > sMax && max != arr[i]) {
        sMax = arr[i]
    }
}

console.log(sMax)