/*
a=35 b=15
Subtract max by min
20 15
5  15
5  10
5  5
The moment both are equal is the answer
Time Complexity O(max(a,b))
*/

let a = 35, b = 15
while (a != b) {
    if (a > b) a -= b
    else b -= a
}
console.log(a)