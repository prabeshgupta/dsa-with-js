let text = "nepalese"
let arr = new Array(128).fill(0)
for (let i = 0; i < text.length; i++) {
    let ch = text.charCodeAt(i)
    arr[ch] = arr[ch] + 1
}

for (let j = 0; j < arr.length; j++) {
    if (arr[j] > 0) {
        console.log(String.fromCharCode(j) + " : " + arr[j])
    }
}