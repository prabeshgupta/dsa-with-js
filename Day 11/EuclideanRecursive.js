function hcf(a, b) {
    if (a == b) return a
    // if (a > b) a -= b
    // else b -= a
    // return hcf(a, b)
    return hcf(a > b ? a - b : a, b > a ? b - a : b)
}
console.log(hcf(14, 7))