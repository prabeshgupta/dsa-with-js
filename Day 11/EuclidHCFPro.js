//Time complexity O(log(max(a,b)))
function gcd(a, b) {
    if (b == 0) return a
    //Swapping and modding
    // 10%2 == 0, 2%10 = 2
    return gcd(b, a % b)
}
gcd(14, 16)