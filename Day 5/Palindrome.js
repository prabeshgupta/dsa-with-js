let text = "DAD"
let i = 0, j = text.length - 1
let palindrome = true
while (i < j) {
    //Check if characters are not equal instead equals
    if (text.charAt(i) != text[j]) {
        palindrome = false
        break
    }
    i++
    j--
}
console.log(palindrome ? "Palindrome" : "Not Palindrome")