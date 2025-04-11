let text = "BeAutiFUlLS"
let data = ''
for (let i = 0; i < text.length; i++) {
    let ch = text.charCodeAt(i)
    if (ch >= 65 && ch <= 90) {
        data += String.fromCharCode(ch + 32)
    } else if (ch >= 97 && ch <= 122) {
        data += String.fromCharCode(ch - 32)
    }
}
console.log(data)